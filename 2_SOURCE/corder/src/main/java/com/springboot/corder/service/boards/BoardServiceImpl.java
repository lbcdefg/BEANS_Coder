package com.springboot.corder.service.boards;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.BoardUpdateDto;
import com.springboot.corder.dto.MemberBoardDto;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
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
    public Board findById(long bid) {
        return boardRepository.findById(bid).get();
    }

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

    @Override
    public Optional<Board> plusLookUpCount(long bid, long lookUpCount) {
        Optional<Board> boardOpt = boardRepository.findById(bid);
        Optional<MemberBoardDto> memberBoardDto= boardRepository.findById(bid).map(MemberBoardDto::from);
        System.out.println("boardOpt(old): " + boardOpt.get().getUdate());
        System.out.println("memberBoardDto(old): " + memberBoardDto.get().getUdate());
        boardOpt.ifPresent(t -> {
            long oldLookUpCount = boardOpt.get().getLookup();
            long newLookUpCount = oldLookUpCount +lookUpCount;
            System.out.println("oldLookUpCount: " + oldLookUpCount);
            System.out.println("newLookUpCount: " + newLookUpCount);
            t.setLookup(newLookUpCount);
            this.boardRepository.save(t);

        });
        Optional<Board> boardOpt1 = boardRepository.findById(bid);
        Optional<MemberBoardDto> memberBoardDto1= boardRepository.findById(bid).map(MemberBoardDto::from);
        System.out.println("boardOpt(new): " + boardOpt1.get().getUdate());
        System.out.println("memberBoardDto(new): " + memberBoardDto1.get().getUdate());

        return boardOpt;
    }
    @Override
    @Transactional
    public long plusVoteCount(long bid, long mid, long voteCount) {
        Board newBoard = null;
        try {
            Member member = memberRepository.findById(mid).get();
            System.out.println("#vote! plus!");
            Board board = boardRepository.findById(bid).get();
            System.out.println(board);
            long oldVoteUpCount = board.getVote();
            if (board.getPlusVoter().isEmpty()) {
                long newVoteUpCount = oldVoteUpCount + voteCount;
                board.setVote(newVoteUpCount);
                board.getPlusVoter().add(member);
                this.boardRepository.save(board);
                newBoard = boardRepository.findById(bid).get();
            } else {
                if (board.getPlusVoter().contains(member)) {
                    System.out.println("포함할떄?: " + member.getMid());
                    long newVoteUpCount = oldVoteUpCount - voteCount;
                    board.setVote(newVoteUpCount);
                    this.boardRepository.save(board);
                    newBoard = boardRepository.findById(bid).get();
                    board.getPlusVoter().remove(member);
                    return newBoard.getVote();
                } else {
                    System.out.println("미포함할떄?: " + member.getMid());
                    long newVoteUpCount = oldVoteUpCount + voteCount ;
                    board.setVote(newVoteUpCount);
                    board.getPlusVoter().add(member);
                    this.boardRepository.save(board);
                    newBoard = boardRepository.findById(bid).get();
                    return newBoard.getVote();
                }
            }
            System.out.println("newBoard.getVote(): " + newBoard.getVote());
            return newBoard.getVote();
        } catch (Exception e){
            System.out.println("voteImpl() error: " + e);
            return 0;
        }

    }
    @Override
    @Transactional
    public long minusVoteCount(long bid, long mid, long voteCount) {
        Board newBoard = null;
        try {
            Member member = memberRepository.findById(mid).get();
            System.out.println("#vote! minus!");
            Board board = boardRepository.findById(bid).get();
            System.out.println(board);
            long oldVoteUpCount = board.getVote();
            if (board.getMinusVoter().isEmpty()) {
                long newVoteUpCount = oldVoteUpCount - voteCount;
                board.setVote(newVoteUpCount);
                board.getMinusVoter().add(member);
                this.boardRepository.save(board);
                newBoard = boardRepository.findById(bid).get();
            } else {
                if (board.getMinusVoter().contains(member)) {
                    System.out.println("포함할떄?: " + member.getMid());
                    long newVoteUpCount = oldVoteUpCount + voteCount;
                    board.setVote(newVoteUpCount);
                    this.boardRepository.save(board);
                    newBoard = boardRepository.findById(bid).get();
                    board.getMinusVoter().remove(member);
                    return newBoard.getVote();
                } else {
                    System.out.println("미포함할떄?: " + member.getMid());
                    long newVoteUpCount = oldVoteUpCount - voteCount ;
                    board.setVote(newVoteUpCount);
                    board.getMinusVoter().add(member);
                    this.boardRepository.save(board);
                    newBoard = boardRepository.findById(bid).get();
                    return newBoard.getVote();
                }
            }
            System.out.println("newBoard.getVote(): " + newBoard.getVote());
            return newBoard.getVote();
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
