package com.springboot.corder.service.member;

import com.springboot.corder.domain.Member;
import com.springboot.corder.repositpory.member.SDJpaMemberRepository;

import java.util.Optional;

public class UserServiceImpl implements UserService{
    private final SDJpaMemberRepository repository;
    public UserServiceImpl(SDJpaMemberRepository repository){
        this.repository = repository;
    }
    @Override
    public Optional<Member> findById(long mid) {
        return repository.findById(mid);
    }
}
