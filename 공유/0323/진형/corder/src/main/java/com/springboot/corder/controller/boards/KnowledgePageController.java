package com.springboot.corder.controller.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.dto.MemberCategoryBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@RequiredArgsConstructor
@Controller
@RequestMapping("knowledge")
public class KnowledgePageController {

    private final BoardService boardservice;
    private final CommentService commentService;
    @GetMapping("")
    public String listAll(){

        return "/boards/knowledge/knowledge";
    }
    @GetMapping("list.do")
    public String list(@PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                       Model model, HttpSession session){
        BoardListResult listResult = boardservice.getBoardListResult(pageable);
        model.addAttribute("listResult", listResult);
        for(MemberCategoryBoardDto board : listResult.getList()){
            System.out.println("글제목: " + board.getSubject());
            System.out.println("글쓴이: " + board.getWriter());
            System.out.println("수정일: " + board.getUdate());
            System.out.println("조회수: " + board.getLookup());
            System.out.println("추천수: " + board.getVote());
        }
        System.out.println("페이지: " + listResult.getPage());
        System.out.println("토탈카운트: " + listResult.getTotalCount());
        System.out.println("토탈페이지카운트: " + listResult.getTotalPageCount());
        System.out.println("사이즈: " + listResult.getSize());
        return "/boards/knowledge/knowledge";
    }

//    @GetMapping("comments.do")
//    @ResponseBody
//    public MemberBoardCommentsDto getComments(@RequestParam long bid){
//        MemberBoardCommentsDto memberBoardCommentsDto = commentService.getCommentById(bid);
//        System.out.println("comments: " +memberBoardCommentsDto);
//        return memberBoardCommentsDto;
//    }


}