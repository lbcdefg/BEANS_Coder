package com.springboot.corder.controller.boards;

import com.springboot.corder.domain.Member;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("jobs")
public class JobsPageController {

    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    @GetMapping("")
    public String listAll(Model model){
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            if (loginOk != null) {
                if (loginOk.getOfname() != null) {

                    model.addAttribute("loginOk", loginOk);
                    return "/boards/jobs/jobs";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("loginOk", loginOk);
                    return "/boards/jobs/jobs";
                }
            } else {
                return "/boards/jobs/jobs";
            }
        }catch (Exception e){
            return "/boards/jobs/jobs";
        }
    }
    void pln(String str){
        System.out.println(str);
    }
}