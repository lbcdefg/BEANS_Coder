package com.springboot.corder.controller.usersettings;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.MemberUpdatePwdDto;
import com.springboot.corder.service.member.MemberFileService;
import com.springboot.corder.service.member.MemberService;
import com.springboot.corder.service.member.MemberServiceImpl;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.Map;

@RequiredArgsConstructor
@RequestMapping("settings")
@Controller
public class UserSettingsController {

    private final SessionControlService sessionControlService;
    private final MemberFileService memberFileService;

    private final MemberServiceImpl memberServiceImpl;

    private final MemberService memberService;

    @GetMapping("")
    public String settingMain(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/profile";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/profile";
        }
    }
    @GetMapping("profile")
    public String myprofile(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        System.out.println("profile: " + loginOk);
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/profile";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/profile";
        }
    }
    @GetMapping("account")
    public String account(Model model){
        Member loginOk = sessionControlService.getSessionInfo();
        if (loginOk.getOfname() != null) {
            model.addAttribute("userImage", loginOk);
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/account";
        } else {
            model.addAttribute("nothing", "nothing");
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/account";
        }
    }
    @GetMapping("password-changes")
    public String changePwd(Model model){
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            model.addAttribute("loginOk", loginOk);
            return "/usersettings/changePwd";
        }catch (Exception e){
            return "/";
        }
    }
    @GetMapping("checkCurrPwd")
    @ResponseBody
    public Boolean checkCurrPwd(long mid, String password){
        System.out.println("checkCurrPwd in? #mid:" + mid + ", #password: " + password);
        return memberService.checkCurrPwd(mid, password);
    }

    @PostMapping("updatePwd.do")
    public String updatePwd(@Valid MemberUpdatePwdDto memberUpdatePwdDto, BindingResult bindingResult, Model model){
        try {
            Member loginOk = sessionControlService.getSessionInfo();
            model.addAttribute("loginOk", loginOk);

            if(bindingResult.hasErrors()) {
                model.addAttribute("memberDto", memberUpdatePwdDto);
                System.out.println("updatePwd 1 memberDto: " + memberUpdatePwdDto);
                Map<String, String> validatorResult = memberServiceImpl.validateHandling(bindingResult);
                for (String key : validatorResult.keySet()) {
                    model.addAttribute(key, validatorResult.get(key));
                    System.out.println("updatePwd #error: " + key + ", #msg: " + validatorResult.get(key));
                }
                /* 회원가입 페이지로 다시 리턴 */
                System.out.println("리턴?");
                return "/usersettings/changePwd";
            }
            String pwd1 = memberUpdatePwdDto.getPassword().trim();
            String pwd2 = memberUpdatePwdDto.getPassword2().trim();
            System.out.println("#pwd: " +  pwd1  + ", #pwd2: " + pwd2);
            if(!pwd1.equals(pwd2)) {
                bindingResult.rejectValue("password2", "passwordInCorrect",
                        "2개의 패스워드가 일치하지 않습니다.");
                String notEqual = "2개의 패스워드가 일치하지 않습니다.";
                model.addAttribute("memberDto", memberUpdatePwdDto);
                model.addAttribute("notEqual", notEqual);
                /* 회원가입 페이지로 다시 리턴 */
                return "/usersettings/changePwd";
            }
            memberService.updatePwd(loginOk.getEmail(), memberUpdatePwdDto);
            System.out.println("pwd 저장 성공?");
            return "/usersettings/account";
        }catch (Exception e){
            System.out.println("updatePwd error: " +e);
            return "/usersettings/changePwd";
        }

    }

    void pln(String str){
        System.out.println(str);
    }


}
