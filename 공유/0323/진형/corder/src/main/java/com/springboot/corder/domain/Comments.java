package com.springboot.corder.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="COMMENTS")
@SequenceGenerator(name="COMMENTS_SEQ_GENERATOR", sequenceName = "COMMENTS_SEQ", initialValue = 1, allocationSize = 1) //Oracle일 경우 추가
public class Comments extends CommonEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMMENTS_SEQ_GENERATOR") //Oracle일 경우 추가
    long cid;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="mid")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="bid")
    private Board board;

}
