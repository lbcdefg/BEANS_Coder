package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.dto.MemberCategoryBoardDto;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.comments.SDJpaCommentsRepository;
import com.springboot.corder.repositpory.member.SDJpaMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;
import java.util.Optional;
@Transactional
@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{

    private final SDJpaMemberRepository memberRepository;

    private final BoardRepository boardRepository;
    private final SDJpaCommentsRepository commentsRepository;

    @Override
    public Page<MemberCategoryBoardDto> findAll(long mid, Pageable pageable) {
        System.out.println("#BoardServiceImpl long_mid: " + mid + ", pageable " + pageable);
        Optional<Member> op = memberRepository.findById(mid);
        System.out.println("#BoardServieImpl op: " + op);
        if(!op.isEmpty()){
            Member member = op.get();
            System.out.println("BoardServiceImpl member: " + member);
            return boardRepository.findByMemberOrderByBidDesc(member, pageable).map(MemberCategoryBoardDto::from);
        }else{
            return boardRepository.findAll(pageable).map(MemberCategoryBoardDto::from);
        }
    }

    @Override
    public Page<MemberCategoryBoardDto> findAll(Pageable pageable) {
        return boardRepository.findAll(pageable).map(MemberCategoryBoardDto::from);
    }
    @Override
    public BoardListResult getBoardListResult(Pageable pageable) {
        Page<MemberCategoryBoardDto> list = findAll(pageable);
        int page = pageable.getPageNumber();;
        long totalCount = boardRepository.count();
        int size = pageable.getPageSize();
        return new BoardListResult(page, totalCount, size, list);
    }
    @Override
    public MemberCategoryBoardDto getBoard(long bid) {
        Board board = boardRepository.findById(bid).get();
        MemberCategoryBoardDto memberCategoryBoardDto = MemberCategoryBoardDto.from(board);
        return memberCategoryBoardDto;
    }
    @Override
    public MemberBoardCommentsDto getComment(long bid) {
        //Comments comments = commentsRepository.findByBid(bid).get();
        //MemberBoardCommentsDto memberBoardCommentsDto = MemberBoardCommentsDto.from(comments);
        return null;
    }
    @Override
    public List<MemberBoardCommentsDto> getCommentList(long bid) {

        return null;
    }

    @Override
    public Board write(long mid, Board board) { //수정할경우
        System.out.println("#BoardServiceImpl write()-1 board: " + board);
        Member member = memberRepository.findById(mid).get();
        board.setMember(member);
        System.out.println("#BoardServiceImpl write()-2 board: " + board);
        board = boardRepository.save(board);
        System.out.println("BoardServiceImpl write()-3 board: " + board);
        return board;
    }

    @Override
    public Board edit(long mid, Board board) {
        Member member = memberRepository.findById(mid).get();
        board.setMember(member);
        board = boardRepository.save(board);
        return board;
    }

    @Override
    public void remove(long bid) {
        boardRepository.deleteById(bid);
    }
}
