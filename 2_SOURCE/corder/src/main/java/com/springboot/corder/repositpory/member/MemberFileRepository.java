package com.springboot.corder.repositpory.member;

import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.MemberFileUpDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberFileRepository extends JpaRepository<Member, Long> {
}
