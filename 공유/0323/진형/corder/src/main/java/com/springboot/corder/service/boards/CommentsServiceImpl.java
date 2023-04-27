package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Comments;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.repositpory.comments.SDJpaCommentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentsServiceImpl implements CommentService{
    @Override
    public MemberBoardCommentsDto getCommentById(long id) {
        return null;
    }

//    private final SDJpaCommentsRepository commentsRepository;
//    @Override
//    public MemberBoardCommentsDto getCommentById(long id) {
//        Comments comments = commentsRepository.findByBid(id);
//        System.out.println("getCommentById() - comments: " + comments);
//        MemberBoardCommentsDto memberBoardCommentsDto= MemberBoardCommentsDto.from(comments);
//        System.out.println("getCommentById() - memberBoardCommentsDto: " + memberBoardCommentsDto);
//        return memberBoardCommentsDto;
//    }
}
