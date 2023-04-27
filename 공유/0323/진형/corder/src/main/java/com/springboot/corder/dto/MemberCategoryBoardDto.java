package com.springboot.corder.dto;


import com.springboot.corder.domain.Board;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class MemberCategoryBoardDto {
    private final long bid;
    private final String writer;
    private final String subject;
    private final String content;
    private final long mid;

    private final String ccode;
    private long lookup;
    private long vote;

    private LocalDateTime rdate;
    private LocalDateTime udate;

    public static MemberCategoryBoardDto from(Board board){
        return MemberCategoryBoardDto.builder()
                .bid(board.getBid())
                .subject(board.getTitle())
                .content(board.getContent())
                .writer(board.getMember().getNick())
                .rdate(board.getRdate())
                .udate(board.getUdate())
                .mid(board.getMember().getMid())    //board에서 참조하는 멤버 id
                .ccode(board.getCategory().getCcode()) //board에서 참조하는 카테고리 id
                .lookup(board.getLookup())
                .vote(board.getVote())
                .build();
    }
}
