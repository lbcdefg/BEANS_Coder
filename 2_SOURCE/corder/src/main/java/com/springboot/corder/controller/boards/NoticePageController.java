package com.springboot.corder.controller.boards;

import com.google.gson.JsonObject;
import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.FileUp;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.comments.CommentService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.boards.file.FileService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Controller
@RequestMapping("notice")
public class NoticePageController {
    String cmain = "notice";
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;
    private final CommentService commentService;

    private final BoardService boardService;
    private final FileService fileService;
    @GetMapping("")
    public String listAll(@PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                          Model model, HttpSession session, HttpServletRequest request){
        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        CommunityListResult listResult;
        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainResultByVote(cmain, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainResultByLookup(cmain, pageable), cmain, pageable); break;
                default: listResult = communityService.getCommunityListResult(communityService.getCmainResultByBid(cmain, pageable), cmain, pageable);
                    sort = "udate"; break;
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByVote(cmain, keyword, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByLookup(cmain, keyword, pageable), cmain, pageable); break;
                default : listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByBid(cmain, keyword, pageable), cmain, pageable);
                    sort = "udate"; break;
            }
            model.addAttribute("kw", keyword);
        }
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                }
            }
        }catch (Exception e){
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sort", sort);
            return "/boards/notice/notice";
        }finally {
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("cmainKor", translateToKor(cmain));
            model.addAttribute("sort", sort);
            return "/boards/notice/notice";
        }
    }
    @GetMapping("/{ccode}")
    public String listSubCategory(@PathVariable("ccode") String ccode, @PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                                  Model model, HttpSession session, HttpServletRequest request){

        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        CommunityListResult listResult;
        System.out.println(noticeList);

        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순, switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByVote(ccode, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByLookup(ccode, pageable), ccode, pageable); break;
                default: listResult = communityService.getCommunitySubListResult(communityService.getCcodeResultByBid(ccode, pageable), ccode, pageable);
                    sort = "udate"; break;
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순 , switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByVote(ccode, keyword, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByLookup(ccode, keyword, pageable), ccode, pageable); break;
                default : listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByBid(ccode, keyword, pageable), ccode, pageable);
                    sort = "udate"; break;
            }
            model.addAttribute("kw", keyword);
        }

        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                }
            }
        }catch (Exception e){
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/notice/notice";
        }finally{
            model.addAttribute("ccode",ccode);
            model.addAttribute("cmain", cmain);
            model.addAttribute("ccodeKor",translateToKor(ccode));
            model.addAttribute("cmainKor", translateToKor(cmain));
            model.addAttribute("sort", sort);
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/notice/notice";
        }
    }
    @GetMapping("/new")
    public String write(Model model){
        try {
            Member loginOk= sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/notice/new";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/notice/new";
                }
            } else {
                return "/boards/notice/new";
            }
        }catch (Exception e){
            return "/boards/notice/new";
        }
    }
    @PostMapping("input.do")
    public String write(@RequestParam long mid, Board board, @RequestParam("files") List<MultipartFile> files) throws IOException {
        Board board1 = boardService.write(mid, board);
        System.out.println("board : " + board1);
        if(files.isEmpty()){
            System.out.println("board 1");
            return "redirect:../notice";
        }else{
            System.out.println("board 2");
            for (MultipartFile multipartFile : files) {
                fileService.saveFile(board1.getBid(), multipartFile);
            }
            System.out.println("board 3");
            return "redirect:../notice";
        }
    }

    static String translateToKor(String target){
        if(target != null) {
            switch (target) {
                case "tech" : return "기술";
                case "career" : return "커리어";
                case "qna-etc" : return "기타";
                case "news" : return "Tech뉴스";
                case "tips" : return "팁";
                case "columns" : return "컬럼";
                case "review" : return "리뷰";
                case "life" : return "사는얘기";
                case "gathering" : return "모임&스터디";
                case "it" : return "IT행사";
                case "promote" : return "홍보&광고";
                case "contract" : return "구인계약직";
                case "fulltime" : return "구인정규직";
                case "resumes" : return "구직";
                case "evalcom" : return "좋은회사&나쁜회사";
                case "questions" : return "Q&A";
                case "knowledge" : return "지식";
                case "community" : return "커뮤니티";
                case "events" : return "이벤트";
                case "jobs" : return "JOBS";
                case "notice" : return "공지사항";
                default: return null;
            }
        }else{
            return null;
        }
    }

    void pln(String str){
        System.out.println(str);
    }
}