package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.repositpory.comments.SDJpaCommentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


public interface CommentService {
    MemberBoardCommentsDto getCommentById(long id);

}
