package com.springboot.corder.repositpory.member;

import com.springboot.corder.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByName(String name);
    Optional<Member> findByEmailContaining(String email);

    Member findByEmail(String email);

    Member findByNick(String email);

    Member findByOfname(String ofname);

    Member save(Member member);
}