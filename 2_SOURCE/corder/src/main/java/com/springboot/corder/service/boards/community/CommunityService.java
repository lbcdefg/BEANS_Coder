package com.springboot.corder.service.boards.community;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CommunityService {
    CommunityListResult getCommunityListResult(Page<MemberBoardDto> datalist, String kw, Pageable pageable);
    Page<MemberBoardDto> getCmainResultByBid(String cmain, Pageable pageable);
    Page<MemberBoardDto> getCmainResultByVote(String cmain, Pageable pageable);
    Page<MemberBoardDto> getCmainResultByLookup(String cmain, Pageable pageable);
    Page<MemberBoardDto> getCmainSearchResultByBid(String cmain, String keyword, Pageable pageable);
    Page<MemberBoardDto> getCmainSearchResultByVote(String cmain, String keyword, Pageable pageable);
    Page<MemberBoardDto> getCmainSearchResultByLookup(String cmain, String keyword, Pageable pageable);

    CommunityListResult getCommunitySubListResult(Page<MemberBoardDto> datalist, String kw, Pageable pageable);

    Page<MemberBoardDto> getCcodeResultByBid(String ccode, Pageable pageable);
    Page<MemberBoardDto> getCcodeResultByVote(String ccode, Pageable pageable);
    Page<MemberBoardDto> getCcodeResultByLookup(String ccode, Pageable pageable);
    Page<MemberBoardDto> getCcodeSearchResultByBid(String ccode, String keyword, Pageable pageable);
    Page<MemberBoardDto> getCcodeSearchResultByVote(String ccode, String keyword, Pageable pageable);
    Page<MemberBoardDto> getCcodeSearchResultByLookup(String ccode, String keyword, Pageable pageable);

    Optional<MemberBoardDto> getArticle(long id);

    CommunityListResult getUserListResult(Member member, Pageable pageable);

    Board findById(long bid);



}
