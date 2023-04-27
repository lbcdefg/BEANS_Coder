package com.springboot.corder.service.session;


import com.springboot.corder.domain.Member;
import com.springboot.corder.repositpory.member.SDJpaMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SessionControlService {
    private final SDJpaMemberRepository memberRepository;
    public Member getSessionInfo(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails =(UserDetails) principal;
        String userId = ((UserDetails) principal).getUsername();
        Member member = memberRepository.findByEmail(userId);
        return member;
    }
}
