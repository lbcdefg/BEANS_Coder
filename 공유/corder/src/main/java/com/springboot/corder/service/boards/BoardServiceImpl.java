package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardListResult;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {

    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;

    @Override
    public Board write(long mid, Board board) {
        Member member = memberRepository.findById(mid).get();
        board.setMember(member);
        board = boardRepository.save(board);
        return board;
    }

    @Override
    public Optional<Board> update(long mid, long bid, BoardUpdateDto boardUpdateDto) {
        Optional<Board> boardOp = boardRepository.findById(bid);
        boardOp.ifPresent(t -> {
            if(boardUpdateDto.getTitle() !=null) {
                t.setTitle(boardUpdateDto.getTitle());
            }
            if(boardUpdateDto.getContent() !=null) {
                t.setContent(boardUpdateDto.getContent());
            }
            t.setUdate(LocalDateTime.now());
            this.boardRepository.save(t);
        });
        return boardOp;
    }

    public Optional<Board>  getBoard(long bid){

        return boardRepository.findById(bid);
    }

    @Override
    public Optional<Board> plusLookUpCount(long bid, long lookUpCount) {
        Optional<Board> entity = getBoard(bid);
        entity.ifPresent(t -> {
            long oldLookUpCount = entity.get().getLookup();
            long newLookUpCount = oldLookUpCount + lookUpCount;
            t.setLookup(newLookUpCount);
            this.boardRepository.save(t);
            System.out.println("조회수 성공?!!");
        });
        return entity;
    }
    @Override
    @Transactional
    public long plusVoteCount(long bid, long mid, long voteCount) {
        try {
            Member member = memberRepository.findById(mid).get();
            System.out.println("#vote!");
            Board board = boardRepository.findById(bid).get();
            System.out.println(board);
            if (board != null) {
                long oldVoteUpCount = board.getVote();
                long newVoteUpCount = oldVoteUpCount + voteCount;
                board.setVote(newVoteUpCount);
                board.getVoter().add(member);
                this.boardRepository.save(board);
                System.out.println("추천 성공?!!");
                Board newBoard = boardRepository.findById(bid).get();
                return newBoard.getVote();
            } else {
                return 0;
            }
        } catch (Exception e){
            System.out.println("voteImpl() error: " + e);
            return 0;
        }
    }
    @Override
    @Transactional
    public long minusVoteCount(long bid, long mid, long voteCount) {
        try {
            Member member = memberRepository.findById(mid).get();
            System.out.println("#vote!");
            Board board = boardRepository.findById(bid).get();
            System.out.println(board);
            if (board != null) {
                long oldVoteUpCount = board.getVote();
                long newVoteUpCount = oldVoteUpCount - voteCount;
                board.setVote(newVoteUpCount);
                board.getVoter().add(member);
                this.boardRepository.save(board);
                System.out.println("비추천 성공?!!");
                Board newBoard = boardRepository.findById(bid).get();
                return newBoard.getVote();
            } else {
                return 0;
            }
        } catch (Exception e){
            System.out.println("voteImpl() error: " + e);
            return 0;
        }
    }

    @Override
    public boolean deleteArticle(long bid) {
        boardRepository.deleteById(bid);
        return true;
    }
}
