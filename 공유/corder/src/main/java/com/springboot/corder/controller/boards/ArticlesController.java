package com.springboot.corder.controller.boards;


import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.FileUp;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.boards.comments.CommentService;
import com.springboot.corder.service.boards.file.FileService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("articles")
public class ArticlesController {
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;
    private final CommentService commentService;

    private final BoardService boardService;

    private final FileService fileService;



    @GetMapping("/{bid}")
    public String getArticle(@PathVariable long bid, Model model, Pageable pageable){
        long lookUpCount =0;
        System.out.println("lookUpCount: " + lookUpCount + ", #bid: " + bid);
        lookUpCount++;
        boardService.plusLookUpCount(bid,lookUpCount);
        System.out.println("lookUpCount: " + lookUpCount);

        Optional<MemberBoardDto> contents = communityService.getArticle(bid);
        CommentListResult commentsList  = commentService.getCommentList(bid, pageable);

        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {

                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                    model.addAttribute("contents",contents.get());
                    model.addAttribute("commentsList",commentsList);
                    return "/boards/community/details";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                    model.addAttribute("contents",contents.get());
                    model.addAttribute("commentsList",commentsList);
                    return "/boards/community/details";
                }
            } else {
                System.out.println("여기?");
                model.addAttribute("contents",contents.get());
                model.addAttribute("noComments", "noComments");
                model.addAttribute("commentsList",commentsList);
                return "/boards/community/details";
            }
        }catch (Exception e){
            System.out.println("예외?");
            model.addAttribute("noComments", "noComments");
            model.addAttribute("commentsList",commentsList);
            model.addAttribute("contents",contents.get());
            return "/boards/community/details";
        }
    }

    //댓글작성
    @PostMapping("commentOk")
    public String write(long mid, long bid, Comments comments){
        commentService.insert(mid, bid, comments);
        return "redirect:../articles/" +bid;
    }

    @GetMapping("plusVoteCount")
    @ResponseBody
    public long plusVoteCount(@RequestParam long bid, @RequestParam long mid){
        long voteCount = 1;
        return boardService.plusVoteCount(bid, mid, voteCount);
    }
    @GetMapping("minusVoteCount")
    @ResponseBody
    public long minusVoteCount(@RequestParam long bid, @RequestParam long mid){
        long voteCount = 1;
        return boardService.minusVoteCount(bid, mid, voteCount);
    }

    @GetMapping("/update/{bid}")
    public String update(@PathVariable long bid, Model model, Pageable pageable){
        Optional<MemberBoardDto> contents = communityService.getArticle(bid);
        CommentListResult commentsList  = commentService.getCommentList(bid, pageable);
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            System.out.println("loginOk: " +loginOk);
            System.out.println("commentsList: " +commentsList);
            if (loginOk != null) {
                FileUp fileup = fileService.view(bid);
                model.addAttribute("fileup",fileup);
                System.out.println("fileup+1 : "+fileup);
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                    model.addAttribute("contents",contents.get());
                    model.addAttribute("commentsList",commentsList);
                    return "/boards/community/update";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    model.addAttribute("contents",contents.get());
                    System.out.println("contents!"+contents);
                    System.out.println("contents.get()!"+contents.get());
                    model.addAttribute("commentsList",commentsList);
                    return "/boards/community/update";
                }
            } else {
                System.out.println("여기?");
                model.addAttribute("contents",contents.get());
                model.addAttribute("noComments", "noComments");
                model.addAttribute("commentsList",commentsList);
                return "/boards/community/update";
            }
        }catch (Exception e){
            System.out.println("예외?");
            model.addAttribute("noComments", "noComments");
            model.addAttribute("commentsList",commentsList);
            model.addAttribute("contents",contents.get());
            return "/boards/community/update";
        }
    }

    @PostMapping("update/updateOk.do")
    public String update(long mid, long bid, BoardUpdateDto boardUpdateDto, @RequestParam("files") List<MultipartFile> files)
            throws IOException {
        System.out.println("boardUpdateDto: "+boardUpdateDto);
        Optional<Board> boardOpt =boardService.update(mid, bid, boardUpdateDto);
        if(files.isEmpty()){
            return "redirect:../" +bid;
        }else {
            System.out.println("update() - !files.isEmpty()");
            for (MultipartFile multipartFile : files) {
                fileService.saveFile(boardOpt.get().getBid(), multipartFile);
            }
            return "redirect:../" +bid;
        }
    }


    @GetMapping("del.do/{bid}/{cid}")   //details.html 댓글삭제에 파라미터값으로 삭제되게 넘겨줌
    public String delete(@PathVariable long cid, @PathVariable long bid){
        System.out.println("delete - in: " + cid); //코멘트시퀀스가 넘어가는지 찍어봄
        System.out.println("delete - bid: " + bid); //보드시퀀스가 넘어가는지 찍어줌
        commentService.delete(cid);
        System.out.println("delete - success");
        return "redirect:../../" +bid;
    }


    @GetMapping("{bid}/del.do")
    public String deleteArticle(@PathVariable long bid){
        System.out.println("deleteArticle in: " + bid);
        boolean flag = boardService.deleteArticle(bid);
        System.out.println("삭제성공?: " +flag);
        return "redirect:/community";

    }



}
