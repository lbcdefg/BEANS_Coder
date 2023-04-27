package com.springboot.corder.controller.myactivity;


import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.repositpory.member.MemberRepository;
import com.springboot.corder.service.boards.comments.CommentService;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("users")
public class MeController {

    private final SessionControlService sessionControlService;
    private final MemberRepository memberRepository;
    private final CommunityService communityService;
    private final CommentService commentService;
    @GetMapping("me")
    public String myActivity(Model model, HttpServletRequest request, @PageableDefault(size=100000, sort="bid", direction = Sort.Direction.DESC) Pageable pageable) {
        Member loginOk = sessionControlService.getSessionInfo();
        CommunityListResult userBoardList = communityService.getUserListResult(loginOk, pageable);
        HashMap<Long, List<Comments>> commentsMap = new HashMap<Long, List<Comments>>();
        for(MemberBoardDto board : userBoardList.getList()) {
            List<Comments> commentsList = commentService.getCommentList(communityService.findById(board.getBid()));
            commentsMap.put(board.getBid(), commentsList);
        }
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
        } else {
            model.addAttribute("nothing", "nothing");
        }
        model.addAttribute("loginOk", loginOk);
        model.addAttribute("boardList", userBoardList);
        model.addAttribute("commentsMap", commentsMap);
        return "/usersettings/me";
    }

    @GetMapping("{mid}")
    public String otherActivity(@PathVariable("mid") long mid, Model model, @PageableDefault(size=100000, sort="bid", direction = Sort.Direction.DESC) Pageable pageable, HttpServletRequest request) {
        Member member = memberRepository.findById(mid).get();
        CommunityListResult userBoardList = communityService.getUserListResult(member, pageable);
        Hashtable<Long, Object> commentsMap = new Hashtable<Long, Object>();
        for (MemberBoardDto board : userBoardList.getList()) {
            List<Comments> commentsList = commentService.getCommentList(communityService.findById(board.getBid()));
            commentsMap.put(board.getBid(), commentsList);
        }
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null){
                if (loginOk.getOfname() != null) {
                    model.addAttribute("userImage", loginOk);
                    model.addAttribute("loginOk", loginOk);
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                }
            } else {
                model.addAttribute("nothing", "nothing");
            }

            model.addAttribute("member", member);
            model.addAttribute("boardList", userBoardList);
            model.addAttribute("commentsMap", commentsMap);
            return "/usersettings/other";
        }catch (Exception e){
            System.out.println("other error: " +e);
            model.addAttribute("member", member);
            model.addAttribute("nothing", "nothing");
            model.addAttribute("boardList", userBoardList);
            model.addAttribute("commentsMap", commentsMap);
            return "/usersettings/other";
        }
    }
}
