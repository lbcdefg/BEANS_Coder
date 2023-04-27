package com.springboot.corder.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Data
@Table(name="VOTE")
@SequenceGenerator(name="VOTE_SEQ_GENERATOR", sequenceName = "VOTE_SEQ", initialValue = 1, allocationSize = 1) //Oracle일 경우 추가
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "VOTE_SEQ_GENERATOR") //Oracle일 경우 추가
    long vid;
    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="mid")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="bid")
    private Board board;
}
