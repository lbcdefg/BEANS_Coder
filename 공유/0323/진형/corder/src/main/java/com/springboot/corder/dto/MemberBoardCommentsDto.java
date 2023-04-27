package com.springboot.corder.dto;


import com.springboot.corder.domain.Comments;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class MemberBoardCommentsDto {
    long cid;
    long bid;
    long mid;
    private String content;

    private LocalDateTime rdate;
    private LocalDateTime udate;

    public static MemberBoardCommentsDto from(Comments comments){
        return MemberBoardCommentsDto.builder()
                .cid(comments.getCid())
                .content(comments.getContent())
                .bid(comments.getBoard().getBid())
                .mid(comments.getMember().getMid())
                .rdate(comments.getMember().getRdate())
                .udate(comments.getMember().getUdate())
                .build();
    }
}
