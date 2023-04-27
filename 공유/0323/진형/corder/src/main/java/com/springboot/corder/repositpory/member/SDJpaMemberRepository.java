package com.springboot.corder.repositpory.member;

import com.springboot.corder.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SDJpaMemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByName(String name);
    Optional<Member> findById(Long mid);
    Optional<Member> findByEmailContaining(String email);

    Member findByEmail(String email);

    Member save(Member member);
}