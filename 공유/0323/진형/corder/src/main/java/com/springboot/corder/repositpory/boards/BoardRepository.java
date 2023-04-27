package com.springboot.corder.repositpory.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    Page<Board> findByMemberOrderByBidDesc(Member member, Pageable pageable);
}
