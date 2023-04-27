package com.springboot.corder.controller.accounts;


import com.springboot.corder.service.email.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("forgot")
public class ResetPwdController {

    private EmailService emailService;

    @GetMapping("")
    public String loadPage(){
        return "/accounts/forgot";
    }
    @GetMapping("resetPwd")
    @ResponseBody
    public Boolean sendEmail(@RequestParam("email") String email) throws Exception{
        System.out.println("resetPwd email: " + email);
        return  emailService.sendUrlMessage(email);
    }
}
