package com.springboot.corder.controller;

import com.springboot.corder.domain.Member;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
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
    @GetMapping("")
    public String main(Model model){
        try {
            Member loginOK = sessionControlService.getSessionInfo();
            System.out.println("loginOK: " + loginOK);
            if (loginOK != null) {
                if(loginOK.getOfname()!=null) {
                    model.addAttribute("userImage", loginOK);
                    model.addAttribute("member", loginOK);
                    return "/main";
                } else {
                    model.addAttribute("nothing", "nothing");
                    model.addAttribute("member", loginOK);
                    return "/main";
                }
            } else {
                model.addAttribute("nothing", "nothing");
                return "/main";
            }
        }catch (Exception e){
            System.out.println("no member?: " + e);
            return "/main";
        }
    }
    void pln(String str){
        System.out.println(str);
    }
}
