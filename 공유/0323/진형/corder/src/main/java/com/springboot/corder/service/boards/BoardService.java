package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.dto.MemberCategoryBoardDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoardService {
    Page<MemberCategoryBoardDto> findAll(long mid, Pageable pageable);
    Page<MemberCategoryBoardDto> findAll(Pageable pageable);


    BoardListResult getBoardListResult(Pageable pageable);
    MemberCategoryBoardDto getBoard(long bid);

    MemberBoardCommentsDto getComment(long bid);
    List<MemberBoardCommentsDto> getCommentList(long bid);

    Board write(long mid, Board board);
    Board edit(long mid, Board board);
    void remove(long bid);
}
