package com.springboot.corder.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@NoArgsConstructor
@Data
public class CommentListResult {
    //private Page<MemberCategoryBoardDto> list;
    private Page<MemberBoardCommentsDto> list;
    private int page;
    private long size;
    private long totalCount;
    private long totalPageCount;

    public CommentListResult(int page, long totalCount, long size, Page<MemberBoardCommentsDto> list){
        this.page = page;
        this.totalCount = totalCount;
        this.size = size;
        this.list = list;
        this.totalPageCount = totalCount;
    }
}
