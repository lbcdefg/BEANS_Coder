package com.springboot.corder.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@NoArgsConstructor
public class BoardListResult {
    private Page<MemberCategoryBoardDto> list;
    private List<MemberBoardCommentsDto> commentlist;
    private int page;
    private int size;
    private long totalCount;
    private long totalPageCount;
    public BoardListResult(int page, long totalCount, int size, Page<MemberCategoryBoardDto> list){
        this.page = page;
        this.totalCount = totalCount;
        this.size = size;
        this.list = list;
        this.totalPageCount = calTotalPageCount();
        this.commentlist = commentlist;
    }
    private long calTotalPageCount() {
        long tpc = totalCount/size;
        if(totalCount%size != 0) tpc++;
        return tpc;
    }
}
