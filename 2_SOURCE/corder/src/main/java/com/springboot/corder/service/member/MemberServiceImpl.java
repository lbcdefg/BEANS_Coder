package com.springboot.corder.service.member;

import com.springboot.corder.dto.MemberUpdatePwdDto;
import com.springboot.corder.repositpory.member.MemberRepository;
import com.springboot.corder.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService {  //회원가입 처리 서비스

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final BCryptPasswordEncoder passEncoder;

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
        Optional<Member> memberOpt = memberRepository.findByEmail(email);
        System.out.println("checkEmail(): "+ memberOpt);
        if (memberOpt.isEmpty()) {
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

    @Override
    public Boolean checkCurrPwd(long mid, String password) {
        Member member = memberRepository.findById(mid).get();
        boolean flag = passwordEncoder.matches(password, member.getPassword());
        if(flag==true) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Optional<Member> saveTempPwd(String email, String password) {
        Optional<Member> memberOpt = memberRepository.findByEmail(email);
        memberOpt.ifPresent(t -> {
            t.setPassword(passwordEncoder.encode(password));
            t.setUdate(LocalDateTime.now());
            this.memberRepository.save(t);
        });
        return memberOpt;
    }

    @Override
    public Optional<Member> updatePwd(String email, MemberUpdatePwdDto memberUpdatePwdDto) {
        Optional<Member> memberOpt = memberRepository.findByEmail(email);
        memberOpt.ifPresent(t -> {
            if (memberUpdatePwdDto.getPassword()!=null) {
                t.setPassword(passwordEncoder.encode(memberUpdatePwdDto.getPassword()));
            }
            t.setUdate(LocalDateTime.now());
            this.memberRepository.save(t);
            System.out.println("updatePwd success???");
        });
        return memberOpt;
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