package com.springboot.corder.service.boards.comments;

import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import com.springboot.corder.dto.CommentListResult;
import com.springboot.corder.dto.CommunityListResult;
import com.springboot.corder.dto.MemberBoardCommentsDto;
import com.springboot.corder.repositpory.boards.BoardRepository;
import com.springboot.corder.repositpory.boards.CommentRepository;
import com.springboot.corder.repositpory.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;


@RequiredArgsConstructor
@Service
public class CommentServiceImpl implements CommentService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    private final CommentRepository commentRepository;

    @Override
    public Page<MemberBoardCommentsDto> getCommunityComments(long bid, Pageable pageable) {
        Optional<Board> op = boardRepository.findById(bid);
        if(!op.isEmpty()) {
            Board board = op.get();
            return commentRepository.findByBoardOrderByCid(board, pageable).map(MemberBoardCommentsDto::from);
        } else {
            return commentRepository.findAll(pageable).map(MemberBoardCommentsDto::from);
        }
    }

    @Override
    public CommentListResult getCommentList(long bid, Pageable pageable) {
        Page<MemberBoardCommentsDto> list = getCommunityComments(bid, pageable);
        int page = pageable.getPageNumber();
        long totalCount = list.getTotalElements();
        long size = list.getTotalElements();
        System.out.println("#page: " + page + ", #totalCount: " + totalCount + ", #size:" + size);
        return new CommentListResult(page, totalCount, size, list);
    }


    @Override
    public Comments insert(long mid, long bid, Comments comments) {
        System.out.println("Comments-insert-in");
        System.out.println("#mid: " + mid + ", #bid: "+ bid + "#comments: "+ comments);
        Member member = memberRepository.findById(mid).get();
        Board board = boardRepository.findById(bid).get();
        comments.setMember(member);
        comments.setBoard(board);
        commentRepository.save(comments);
        System.out.println("Comments-insert-out");
        return null;
    }

    @Override
    public Comments update() {
        return null;
    }

    @Override
    public Boolean delete(long cid) {
        System.out.println("#deleteS Comment");
        commentRepository.deleteById(cid);
        return false;
    }

    //진형추가 0329
    @Override
    public List<Comments> getCommentList(Board board){
        return commentRepository.findByBoardOrderByCid(board);
    }
}
