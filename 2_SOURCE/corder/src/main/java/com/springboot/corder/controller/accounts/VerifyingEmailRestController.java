package com.springboot.corder.controller.accounts;

import com.springboot.corder.service.email.EmailService;
import com.springboot.corder.service.email.EmailServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Slf4j
@RequestMapping("accounts")
@RestController
public class VerifyingEmailRestController {

    private final EmailService emailService;
    @PostMapping("mailConfirm")
    @ResponseBody
    public String mailConfirm(@RequestParam("email") String email) throws Exception {
        System.out.println("email: " + email);
        String code = emailService.sendSimpleMessage(email);
        log.info("인증코드 : " + code);
        return code;
    }
}
