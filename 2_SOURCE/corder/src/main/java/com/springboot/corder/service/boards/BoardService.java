package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.MemberBoardDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BoardService {

    Board findById(long bid);
    Board write(long mid, Board board);

    Optional<Board> update(long mid, long bid, BoardUpdateDto boardUpdateDto);

    Optional<Board> plusLookUpCount(long bid, long lookUpCount);

    long plusVoteCount(long bid, long mid, long voteCount);
    long minusVoteCount(long bid, long mid, long voteCount);

    boolean deleteArticle(long bid);

}
