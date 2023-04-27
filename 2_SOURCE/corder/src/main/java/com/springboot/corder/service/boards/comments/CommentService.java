package com.springboot.corder.service.boards.comments;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Stream;

public interface CommentService {
    Page<MemberBoardCommentsDto> getCommunityComments(long bid, Pageable pageable);

    CommentListResult getCommentList(long bid, Pageable pageable);
    Comments insert(long mid, long bid, Comments comments);

    Comments update();

    Boolean delete(long cid);

    List<Comments> getCommentList(Board board);
}
