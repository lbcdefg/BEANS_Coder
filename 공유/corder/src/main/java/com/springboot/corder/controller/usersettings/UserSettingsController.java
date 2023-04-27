package com.springboot.corder.controller.usersettings;

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
@RequestMapping("settings")
@Controller
public class UserSettingsController {

    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;
    @GetMapping("")
    public String settingMain(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("member", loginOk);
            return "/settings/profile";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("member", loginOk);
            return "/settings/profile";
        }
    }
    @GetMapping("profile")
    public String myprofile(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("member", loginOk);
            return "/settings/profile";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("member", loginOk);
            return "/settings/profile";
        }
    }
    @GetMapping("account")
    public String account(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("member", loginOk);
            return "/settings/account";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("member", loginOk);
            return "/settings/account";
        }
    }

    void pln(String str){
        System.out.println(str);
    }
}
