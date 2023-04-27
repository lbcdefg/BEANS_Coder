package com.springboot.corder.service.session;


import com.springboot.corder.domain.Member;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class SessionControlService {
    private final MemberRepository memberRepository;
    public Member getSessionInfo(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails =(UserDetails) principal;
        String userId = ((UserDetails) principal).getUsername();
        Optional<Member> member = memberRepository.findByEmail(userId);
        System.out.println("getSessionInfo: " + member);
        return member.get();
    }
}
