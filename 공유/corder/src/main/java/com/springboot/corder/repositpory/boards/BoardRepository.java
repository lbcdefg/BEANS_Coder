package com.springboot.corder.repositpory.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Page<Board> findAll(Pageable pageable);

    Board findByMember(Member member);



}
