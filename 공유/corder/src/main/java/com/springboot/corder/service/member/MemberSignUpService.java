package com.springboot.corder.service.member;

import com.springboot.corder.domain.Board;
import com.springboot.corder.repositpory.member.MemberRepository;
import com.springboot.corder.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MemberSignUpService implements MemberService {  //회원가입 처리 서비스

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Member create(String email, String name, String nick, String password){
        Member member = new Member();
        member.setEmail(email);
        member.setName(name);
        member.setNick(nick);
        member.setPassword(passwordEncoder.encode(password));
        this.memberRepository.save(member);
        System.out.println("회원 가입 성공");
        return member;
    }

    @Override
    public Boolean checkEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        System.out.println("checkEmail(): "+ member);
        if (member == null) {
            return true;
        } else {
            return false;
        }
    }
    @Override
    public Boolean checkNick(String nick) {
        Member member = memberRepository.findByNick(nick);
        if (member == null) {
            return true;
        } else {
            return false;
        }
    }

    /* 회원가입 시, 유효성 체크 */
    @Transactional(readOnly = true)
    public Map<String, String> validateHandling(Errors errors){
        Map<String, String> validatorResult = new HashMap<>();
        /* 유효성 검사에 실패한 필드 목록을 받음 */
        for (FieldError error : errors.getFieldErrors()){
            String validKeyName = String.format("valid_%s", error.getField());
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }
        return validatorResult;
    }
}