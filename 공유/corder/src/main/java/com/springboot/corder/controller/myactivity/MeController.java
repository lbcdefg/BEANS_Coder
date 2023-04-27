package com.springboot.corder.controller.myactivity;


import com.springboot.corder.domain.Member;
import com.springboot.corder.repositpory.member.MemberRepository;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
@RequestMapping("users")
public class MeController {

    private final SessionControlService sessionControlService;
    private final MemberRepository memberRepository;
    @GetMapping("me")
    public String myActivity(Model model, HttpServletRequest request) {
        Member loginOk = sessionControlService.getSessionInfo();

        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            return "/settings/me";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            return "/settings/me";
        }
    }
    @GetMapping("{mid}")
    public String otherActivity(@PathVariable("mid") long mid, Model model, HttpServletRequest request) {
        Member loginOk = sessionControlService.getSessionInfo();
        Member member = memberRepository.findById(mid).get();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            model.addAttribute("member",member);
            return "/settings/other";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            model.addAttribute("member",member);
            return "/settings/other";
        }

    }
}
