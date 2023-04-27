package com.springboot.corder.controller.accounts;

import com.springboot.corder.dto.MemberSignUpDto;
import com.springboot.corder.service.member.MemberService;
import com.springboot.corder.service.member.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
@Controller
@RequestMapping("accounts")
public class AccountsController {
    private final MemberServiceImpl memberServiceImpl;

    private final MemberService memberService;

    @GetMapping("login.do")
    public String login(){
        return "/accounts/login";
    }


    @GetMapping("signup.do")
    public String signup(){
        return "/accounts/signup";
    }

    /** 이메일이 DB에 존재하는지 확인 **/
    @GetMapping("checkEmail")
    @ResponseBody
    public boolean checkEmail(@RequestParam("email") String email){

        return memberService.checkEmail(email);
    }
    @GetMapping("checkNick")
    @ResponseBody
    public boolean checkNick(@RequestParam("nick") String nick){
        return memberService.checkNick(nick);
    }

    @PostMapping("signupOk.do")
    public String signup(@Valid MemberSignUpDto memberRequestDto, BindingResult bindingResult, Model model){

        try {
            System.out.println("signupOk 1 errors: " + bindingResult);
            if (bindingResult.hasErrors()) {
                /* 회원가입 실패시 입력 데이터 값을 유지 */
                model.addAttribute("memberDto", memberRequestDto);
                System.out.println("signupOk 1 memberDto: " + memberRequestDto);
                /* 유효성 통과 못한 필드와 메시지를 핸들링 */
                Map<String, String> validatorResult = memberServiceImpl.validateHandling(bindingResult);
                for (String key : validatorResult.keySet()) {
                    model.addAttribute(key, validatorResult.get(key));
                    model.addAttribute("error", key);
                    model.addAttribute("msg", validatorResult.get(key));
                    System.out.println("signupOk #error: " + key + ", #msg: " + validatorResult.get(key));
                }
                /* 회원가입 페이지로 다시 리턴 */
                return "/accounts/signup";
            }
            String pwd1 = memberRequestDto.getPassword().trim();
            String pwd2 = memberRequestDto.getPassword2().trim();
            System.out.println("#pwd: " +  pwd1  + ", #pwd2: " + pwd2);
            if(!pwd1.equals(pwd2)) {
                bindingResult.rejectValue("password2", "passwordInCorrect",
                        "2개의 패스워드가 일치하지 않습니다.");
                String notEqual = "2개의 패스워드가 일치하지 않습니다.";
                model.addAttribute("memberDto", memberRequestDto);
                model.addAttribute("notEqual", notEqual);
                /* 회원가입 페이지로 다시 리턴 */
                return "/accounts/signup";
            }
            System.out.println("signupOk 1 !errors: " + memberRequestDto);

            memberServiceImpl.create(memberRequestDto.getEmail(), memberRequestDto.getName(), memberRequestDto.getNick(), pwd1);
            return "redirect:login.do";
        }catch (ConstraintViolationException cve) {
            pln("cve: " + cve);
            return "/accounts/signup";
        }
    }
    void pln(String str) {
        System.out.println(str);
    }
}
