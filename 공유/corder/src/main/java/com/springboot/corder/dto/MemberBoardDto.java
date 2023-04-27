package com.springboot.corder.dto;


import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import lombok.Builder;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Builder
@Data
public class MemberBoardDto {
    private final long bid;
    private final String writer;
    private final String title;
    private final String content;
    private final long lookup;
    private final long vote;
    private final long mid;
    private final String ccode;

    private final String cmain;
    private LocalDateTime rdate;
    private LocalDateTime udate;
    private long commentCount;

    private Set<Member> voterList;

    public static MemberBoardDto from(Board board){
        return MemberBoardDto.builder()
                .bid(board.getBid())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getMember().getNick())
                .lookup(board.getLookup())
                .vote(board.getVote())
                .rdate(board.getRdate())
                .udate(board.getUdate())
                .ccode(board.getCcode())
                .cmain(board.getCmain())
                .mid(board.getMember().getMid())    //board에서 참조하는 멤버 id
                .commentCount(board.getCommentsList().size())
                .voterList(board.getVoter())
                .build();
    }
}
