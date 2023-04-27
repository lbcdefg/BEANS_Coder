package com.springboot.corder.repositpory.member;

import com.springboot.corder.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByName(String name);
    Optional<Member> findByEmailContaining(String email);

    Optional<Member> findByEmail(String email);

    Member findByPassword(String password);

    Member findByNick(String email);

    Member findByFname(String fname);

    Member save(Member member);
}