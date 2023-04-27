package com.springboot.corder.dto;

import com.springboot.corder.domain.Vote;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class MemberBoardVoteDto {
    long vid;
    long mid;
    long bid;
    public static MemberBoardVoteDto from(Vote vote){
        return MemberBoardVoteDto.builder()
                .vid(vote.getVid())
                .mid(vote.getMember().getMid())
                .bid(vote.getBoard().getBid())
                .build();
    }
}
