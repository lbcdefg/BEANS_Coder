package com.springboot.corder.repositpory.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.CommentListResult;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comments, Long> {
    Page<Comments> findByBoardOrderByCid(Board board, Pageable pageable);
    List<Comments> findByBoardOrderByCid(Board board); //진형추가 0329

}
