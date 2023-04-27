package com.springboot.corder.dto;


import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import com.springboot.corder.service.session.SessionControlService;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class MemberBoardCommentsDto {
    long cid;
    long bid;
    long mid;

    private String writer;
    private String content;

    private LocalDateTime rdate;
    private LocalDateTime udate;

    public static MemberBoardCommentsDto from(Comments comments){
        return MemberBoardCommentsDto.builder()
                .cid(comments.getCid())
                .writer(comments.getMember().getNick())
                .content(comments.getContent())
                .bid(comments.getBoard().getBid())
                .mid(comments.getMember().getMid())
                .rdate(comments.getRdate())
                .udate(comments.getUdate())
                .build();
    }
}
