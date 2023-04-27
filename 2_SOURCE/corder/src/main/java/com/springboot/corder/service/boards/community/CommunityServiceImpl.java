package com.springboot.corder.service.boards.community;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.boards.CommentRepository;
import com.springboot.corder.repositpory.boards.CommunityRepository;
import com.springboot.corder.service.boards.comments.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.expression.spel.ast.OpOr;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class CommunityServiceImpl implements CommunityService {
    private final CommunityRepository communityRepository;

    private final CommentRepository commentRepository;

    private final BoardRepository boardRepository;

    private final EntityManager em;
    //@Query("select b.ccode, c.cmain from board b join category c on b.ccode=c.ccode")
    public List<Board> findAll(){
        List<Board> boardList = communityRepository.findAll();
        System.out.println(boardList);
        return boardList;
    }
    @Override
    public CommunityListResult getCommunityListResult(Page<MemberBoardDto> datalist, String cmain, Pageable pageable) {
        //System.out.println("!");
        Page<MemberBoardDto> list = datalist;
        int page = pageable.getPageNumber();
        long totalCount = list.getTotalElements();
        int size = pageable.getPageSize();
        //System.out.println("#page: " + page + ", #totalCount: " + totalCount + ", #size:" + size);
        return new CommunityListResult(page, totalCount, size, list);
    }
    @Override // 세부카테고리(X) + 검색어(X) + 최신순정렬(기본)
    public Page<MemberBoardDto> getCmainResultByBid(String cmain, Pageable pageable) {
        return communityRepository.findByCmainContainingOrderByUdateDesc(cmain, pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(X) + 검색어(X) + 추천순
    public Page<MemberBoardDto> getCmainResultByVote(String cmain, Pageable pageable) {
        return communityRepository.findByCmainContainingOrderByVoteDesc(cmain, pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(X) + 검색어(X) + 조회순
    public Page<MemberBoardDto> getCmainResultByLookup(String cmain, Pageable pageable) {
        return communityRepository.findByCmainContainingOrderByLookupDesc(cmain, pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(X) + 검색어(O) + 최신순정렬(기본)
    public Page<MemberBoardDto> getCmainSearchResultByBid(String cmain, String keyword, Pageable pageable) {
        return communityRepository.findByCmainContainingAndTitleContainingOrderByUdateDesc(cmain, keyword, pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(X) + 검색어(O) + 추천순
    public Page<MemberBoardDto> getCmainSearchResultByVote(String cmain, String keyword, Pageable pageable) {
        return communityRepository.findByCmainContainingAndTitleContainingOrderByVoteDesc(cmain, keyword, pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(X) + 검색어(O) + 조회순
    public Page<MemberBoardDto> getCmainSearchResultByLookup(String cmain, String keyword, Pageable pageable) {
        return communityRepository.findByCmainContainingAndTitleContainingOrderByLookupDesc(cmain, keyword, pageable).map(MemberBoardDto::from);
    }
    @Override
    public CommunityListResult getCommunitySubListResult(Page<MemberBoardDto> datalist, String ccode, Pageable pageable) {
        //Page<MemberBoardDto> list = getCommunitySubList(ccode, pageable);
        Page<MemberBoardDto> list = datalist;
        int page = pageable.getPageNumber();
        long totalCount = list.getTotalElements();
        int size = pageable.getPageSize();
        //System.out.println("#page: " + page + ", #totalCount: " + totalCount + ", #size:" + size);
        return new CommunityListResult(page, totalCount, size, list);
    }
    @Override // 세부카테고리(O) + 검색어(X) + 최신순정렬(기본)
    public Page<MemberBoardDto> getCcodeResultByBid(String ccode, Pageable pageable) {
        return communityRepository.findByCcodeContainingOrderByBidDesc(ccode,pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(O) + 검색어(X) + 추천순정렬
    public Page<MemberBoardDto> getCcodeResultByVote(String ccode, Pageable pageable) {
        return communityRepository.findByCcodeContainingOrderByVoteDesc(ccode,pageable).map(MemberBoardDto::from);
    }
    @Override // 세부카테고리(O) + 검색어(X) + 조회순정렬
    public Page<MemberBoardDto> getCcodeResultByLookup(String ccode, Pageable pageable) {
        return communityRepository.findByCcodeContainingOrderByLookupDesc(ccode,pageable).map(MemberBoardDto::from);
    }
    @Override //세부카테고리(O) + 검색어(O) + 최신순 정렬(기본)
    public Page<MemberBoardDto> getCcodeSearchResultByBid(String ccode, String keyword, Pageable pageable) {
        return communityRepository.findByCcodeContainingAndTitleContainingOrderByBidDesc(ccode, keyword,pageable).map(MemberBoardDto::from);
    }
    @Override //세부카테고리(O) + 검색어(O) + 추천순 정렬
    public Page<MemberBoardDto> getCcodeSearchResultByVote(String ccode, String keyword, Pageable pageable) {
        return communityRepository.findByCcodeContainingAndTitleContainingOrderByVoteDesc(ccode, keyword,pageable).map(MemberBoardDto::from);
    }
    @Override //세부카테고리(O) + 검색어(O) + 조회순 정렬
    public Page<MemberBoardDto> getCcodeSearchResultByLookup(String ccode, String keyword, Pageable pageable) {
        return communityRepository.findByCcodeContainingAndTitleContainingOrderByLookupDesc(ccode, keyword,pageable).map(MemberBoardDto::from);
    }

    @Override
    public  Optional<MemberBoardDto> getArticle(long id) {
        Optional<MemberBoardDto> memberBoardDto = communityRepository.findById(id).map(MemberBoardDto::from);
        System.out.println("#detailS: " + memberBoardDto);
        return memberBoardDto;
    }

    //진형추가 0329
    @Override
    public CommunityListResult getUserListResult(Member member, Pageable pageable) {
        Page<MemberBoardDto> list = communityRepository.findByMember(member, pageable).map(MemberBoardDto::from);
        int page = pageable.getPageNumber();
        long totalCount = list.getTotalElements();
        int size = pageable.getPageSize();
        return new CommunityListResult(page, totalCount, size, list);
    }

    //진형추가 0329
    @Override
    public Board findById(long bid){
        Optional<Board> board = communityRepository.findById(bid);
        return board.get();
    }
}

