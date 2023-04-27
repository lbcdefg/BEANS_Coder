package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;

import java.util.Optional;

public interface UserService {
    Optional<Member> findById(long mid);
}
