package com.springboot.corder.controller;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.service.boards.community.CommunityService;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collection;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
public class MainController {
    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;

    private final CommunityService communityService;

    @GetMapping("")
    public String main(Model model, @PageableDefault(size=5, sort="bid", direction = Sort.Direction.DESC)  Pageable pageable){
        CommunityListResult questionsList =communityService.getCommunityListResult(communityService.getCmainResultByBid("questions", pageable), "questions", pageable);
        CommunityListResult knowledgeList =communityService.getCommunityListResult(communityService.getCmainResultByBid("knowledge", pageable), "knowledge", pageable);
        CommunityListResult communityList =communityService.getCommunityListResult(communityService.getCmainResultByBid("community", pageable), "community", pageable);
        CommunityListResult eventsList =communityService.getCommunityListResult(communityService.getCmainResultByBid("events", pageable), "events", pageable);
        CommunityListResult jobsList =communityService.getCommunityListResult(communityService.getCmainResultByBid("jobs", pageable), "jobs", pageable);
        CommunityListResult noticeList =communityService.getCommunityListResult(communityService.getCmainResultByBid("notice", pageable), "notice", pageable);

        try {
            Member loginOK = sessionControlService.getSessionInfo();
            System.out.println("loginOK: " + loginOK);
            if (loginOK != null) {
                System.out.println("loginOK != null");
                if(loginOK.getOfname()!=null) {
                    System.out.println("loginOK: " + loginOK.getOfname());
                    model.addAttribute("userImage", loginOK);
                    model.addAttribute("loginOK", loginOK);
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOK", loginOK);
                }
            } else {
                model.addAttribute("nothing", "nothing");
            }
        }catch (Exception e){
            model.addAttribute("nothing", "nothing");
            model.addAttribute("questionsList", questionsList);
            model.addAttribute("knowledgeList", knowledgeList);
            model.addAttribute("communityList", communityList);
            model.addAttribute("eventsList", eventsList);
            model.addAttribute("jobsList", jobsList);
            model.addAttribute("noticeList", noticeList);
            return "/main";
        } finally {
            model.addAttribute("questionsList", questionsList);
            model.addAttribute("knowledgeList", knowledgeList);
            model.addAttribute("communityList", communityList);
            model.addAttribute("eventsList", eventsList);
            model.addAttribute("jobsList", jobsList);
            model.addAttribute("noticeList", noticeList);
            return "/main";

        }
    }
    void pln(String str){
        System.out.println(str);
    }
}
