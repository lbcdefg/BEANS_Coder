package com.springboot.corder.service.member;

import com.springboot.corder.repositpory.member.SDJpaMemberRepository;
import com.springboot.corder.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class UserSignUpService {  //회원가입 처리 서비스
    private final SDJpaMemberRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public Member create(String email, String name, String nick, String password){
        Member member = new Member();
        member.setEmail(email);
        member.setName(name);
        member.setNick(nick);
        member.setPassword(passwordEncoder.encode(password));
        this.userRepository.save(member);
        return member;
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