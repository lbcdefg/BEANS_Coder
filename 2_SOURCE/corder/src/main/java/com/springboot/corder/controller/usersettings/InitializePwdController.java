package com.springboot.corder.controller.usersettings;


import com.springboot.corder.domain.Member;
import com.springboot.corder.service.email.ResetPwdService;
import com.springboot.corder.service.member.MemberService;
import com.springboot.corder.service.session.SessionControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
@RequestMapping("forgot")
public class InitializePwdController {

    private final SessionControlService sessionControlService;
    private final ResetPwdService resetPwdService;

    private final MemberService memberService;

    @GetMapping("")
    public String loadPage(){
        return "/usersettings/forgot";
    }
    @GetMapping("matchEmail")
    @ResponseBody
    public boolean checkEmail(@RequestParam("email") String email){
        System.out.println("email: " + email);
        return memberService.checkEmail(email);
    }
    @GetMapping("resetPwd")
    @ResponseBody
    public String sendEmail(@RequestParam("email") String email) throws Exception{
        System.out.println("resetPwd email: " + email);
        String tempPwd = resetPwdService.sendTempPwdMessage(email);
        System.out.println("sendEmail: " + tempPwd);
        memberService.saveTempPwd(email, tempPwd);
        System.out.println("임시비번 저장 성공?");
        return tempPwd;
    }
    @GetMapping("newpwd")
    public String newPwd(Model model){

        return "/usersettings/initializePwd";
    }
}
