package com.springboot.corder.controller.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.service.boards.BoardService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.source.ConfigurationPropertyName;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("community")
public class CommunityPageController {
    String cmain = "community";
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    private final CommunityService communityService;

    private final BoardService boardService;

    @GetMapping("")
    public String listAll(@PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                          Model model, HttpSession session, HttpServletRequest request){
        //CommunityListResult listResult = communityService.getCommunityListResult(communityService.getCommunityList(cmain, pageable), cmain, pageable);
        String keyword = request.getParameter("kw");
        String sort = request.getParameter("sort");
        CommunityListResult noticeList = communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);
        System.out.println(noticeList);
        CommunityListResult listResult;
        if(keyword == null){ //검색어가 없을때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainResultByVote(cmain, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainResultByLookup(cmain, pageable), cmain, pageable); break;
                //case "comment": communityService.getCommunityListResult(communityService.getCmainResultByComment(cmain, pageable), cmain, pageable); break;
                default: listResult = communityService.getCommunityListResult(communityService.getCmainResultByBid(cmain, pageable), cmain, pageable);
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순
                case "vote": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByVote(cmain, keyword, pageable), cmain, pageable); break;
                //case "comment": communityService.getCommunityListResult(communityService.getCmainSearchResultByComment(cmain, keyword, pageable), cmain, pageable); break;
                case "lookup": listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByLookup(cmain, keyword, pageable), cmain, pageable); break;
                default : listResult = communityService.getCommunityListResult(communityService.getCmainSearchResultByBid(cmain, keyword, pageable), cmain, pageable);
                    sort = ""; break;
            }
            model.addAttribute("kw", keyword);
        }
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            //System.out.println("community-getSessionInfo: "+member);
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                } else {
                    //System.out.println("notNull-listResult: " + listResult);
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                }
            }
        }catch (Exception e){
            //System.out.println("community-listResult: "+listResult.getList());
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            return "/boards/community/community";
        }finally{
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            return "/boards/community/community";
        }
    }
    @GetMapping("/{ccode}")
    public String listLife(@PathVariable("ccode") String ccode, @PageableDefault(size=20, sort="bid", direction = Sort.Direction.DESC) Pageable pageable,
                                Model model, HttpSession session, HttpServletRequest request){
        switch(ccode){
            case "life": ccode = "사는얘기"; break;
            case "gathering": ccode = "모임/스터디"; break;
        }
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
            }
        }else{ //검색어 있을 때
            switch(sort != null ? sort : "null"){ //정렬에 따른 분류, 기본(default=sort 값이 null 이어도)는 최신순 , switch가 default로 널을 못잡아서 널처리해줘야함
                case "vote": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByVote(ccode, keyword, pageable), ccode, pageable); break;
                case "lookup": listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByLookup(ccode, keyword, pageable), ccode, pageable); break;
                default : listResult = communityService.getCommunitySubListResult(communityService.getCcodeSearchResultByBid(ccode, keyword, pageable), ccode, pageable);
                            sort = ""; break;
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
                    //System.out.println("notNull-listResult: " + listResult);
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOk);
                }
            }
        }catch (Exception e){
            //System.out.println("community-listResult: "+listResult.getList());
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/community/community";
        }finally{
            model.addAttribute("ccode",ccode);
            model.addAttribute("cmain", cmain);
            model.addAttribute("sortBy", sort);
            model.addAttribute("maxPage", 6);
            model.addAttribute("listResult", listResult);
            model.addAttribute("noticeList", noticeList);
            return "/boards/community/community";
        }
    }


    @GetMapping("/new")
    public String write(Model model){
        try {
            Member loginOk = sessionControlService.getSessionInfo();

            if (loginOk != null) {
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("member", loginOk);
                    return "/boards/community/new";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member",loginOk);
                    return "/boards/community/new";
                }
            } else {
                return "/boards/community/new";
            }
        }catch (Exception e){
            return "/boards/community/new";
        }
    }

    @PostMapping("/input.do")
    public String write(@RequestParam long mid, Board board){
        boardService.write(mid, board);
        return "redirect:../community";
    }


    void pln(String str){
        System.out.println(str);
    }
}