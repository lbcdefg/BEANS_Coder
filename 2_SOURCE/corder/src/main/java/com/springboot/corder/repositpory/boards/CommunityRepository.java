package com.springboot.corder.repositpory.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommunityRepository extends JpaRepository<Board, Long> {

    Page<Board> findAll(Pageable pageable);


    // 기본정렬 : 최신순
    Page<Board> findByCmainContainingOrderByUdateDesc(String cmain, Pageable pageable);
    // 기본정렬 : 추천순
    Page<Board> findByCmainContainingOrderByVoteDesc(String cmain, Pageable pageable);
    // 기본정렬 : 조회순
    Page<Board> findByCmainContainingOrderByLookupDesc(String cmain, Pageable pageable);


    /////////////////////////////////////////////// 키워드 있을 경우(검색 적용)
    // 기본정렬 : 최신순 + 검색
    Page<Board> findByCmainContainingAndTitleContainingOrderByUdateDesc(String cmain, String keyword, Pageable pageable);
    // 기본정렬 : 추천순 + 검색
    Page<Board> findByCmainContainingAndTitleContainingOrderByVoteDesc(String cmain, String keyword, Pageable pageable);
    // 기본정렬 : 조회순 + 검색
    Page<Board> findByCmainContainingAndTitleContainingOrderByLookupDesc(String cmain, String keyword, Pageable pageable);


    // 기본정렬 : 최신순
    Page<Board> findByCcodeContainingOrderByBidDesc(String ccode, Pageable pageable);
    // 기본정렬 : 추천순
    Page<Board> findByCcodeContainingOrderByVoteDesc(String ccode, Pageable pageable);
    // 기본정렬 : 조회순
    Page<Board> findByCcodeContainingOrderByLookupDesc(String ccode, Pageable pageable);


    /////////////////////////////////////////////// 키워드 있을 경우(검색 적용 + 세부카테고리내)

    Page<Board> findByCcodeContainingAndTitleContainingOrderByBidDesc(String ccode, String keyword, Pageable pageable);
    // 기본정렬 : 추천순 + 검색
    Page<Board> findByCcodeContainingAndTitleContainingOrderByVoteDesc(String ccode, String keyword, Pageable pageable);
    // 기본정렬 : 조회순 + 검색
    Page<Board> findByCcodeContainingAndTitleContainingOrderByLookupDesc(String ccode, String keyword, Pageable pageable);


    Optional<Board> findByBid(long id);

    Page<Board> findByMember(Member member, Pageable pageable); //진형추가0329
}
