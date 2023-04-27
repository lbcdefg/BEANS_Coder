package com.springboot.corder.dto;


import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.FileUp;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BoardFileUpDto {
    private Long fid;
    private String fname;
    private String ofname;
    private String savedpath;
    private final long bid;

    public static BoardFileUpDto from(FileUp fileUp){
        return BoardFileUpDto.builder()
                .fid(fileUp.getFid())
                .fname(fileUp.getFname())
                .ofname(fileUp.getOfname())
                .savedpath(fileUp.getSavedpath())
                .bid(fileUp.getBoard().getBid())
                .build();
    }
}
