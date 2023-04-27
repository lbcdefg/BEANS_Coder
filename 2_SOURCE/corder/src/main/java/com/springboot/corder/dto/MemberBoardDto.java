package com.springboot.corder.dto;


import com.springboot.corder.domain.Board;
import com.springboot.corder.domain.Comments;
import com.springboot.corder.domain.Member;
import lombok.Builder;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Builder
@Data
public class MemberBoardDto {
    private final long bid;
    private final String writer;
    private final String title;
    private final String content;
    private final long lookup;
    private final long vote;
    private final long mid;
    private final String ccode;

    private final String cmain;
    private LocalDateTime rdate;
    private LocalDateTime udate;

    private String fname;
    private String ofname;
    private String savedpath;

    private long commentCount;

    private Set<Member> plusVoterList;

    private Set<Member> minusVoterList;

    //진형추가 0329
    static String translateToKor(String target){
        if(target != null) {
            switch (target) {
                case "tech" : return "기술";
                case "career" : return "커리어";
                case "etc" : return "기타";
                case "news" : return "Tech뉴스";
                case "tips" : return "팁";
                case "columns" : return "컬럼";
                case "review" : return "리뷰";
                case "life" : return "사는얘기";
                case "gathering" : return "모임&스터디";
                case "it" : return "IT행사";
                case "promote" : return "홍보&광고";
                case "contract" : return "구인계약직";
                case "fulltime" : return "구인정규직";
                case "resumes" : return "구직";
                case "evalcom" : return "좋은회사&나쁜회사";
                case "Q&A" : return "Q&A";
                case "knowledge" : return "지식";
                case "community" : return "커뮤니티";
                case "event" : return "이벤트";
                case "jobs" : return "JOBS";
                default: return "공지사항";
            }
        }else{
            return null;
        }
    }
    //진형추가 0329
    private final String ccodeKor;
    //진형추가 0329
    private final String cmainKor;
    public static MemberBoardDto from(Board board){
        return MemberBoardDto.builder()
                .bid(board.getBid())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getMember().getNick())
                .lookup(board.getLookup())
                .vote(board.getVote())
                .rdate(board.getRdate())
                .udate(board.getUdate())
                .ccode(board.getCcode())
                .cmain(board.getCmain())
                .mid(board.getMember().getMid())    //board에서 참조하는 멤버 id
                .commentCount(board.getCommentsList().size())
                .plusVoterList(board.getPlusVoter())
                .minusVoterList(board.getMinusVoter())
                .ccodeKor(translateToKor(board.getCcode())) //진형추가 0329
                .cmainKor(translateToKor(board.getCmain())) //진형추가 0329
                .fname(board.getMember().getFname())
                .build();
    }
}
