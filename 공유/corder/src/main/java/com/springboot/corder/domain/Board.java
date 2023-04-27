package com.springboot.corder.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString(exclude = "commentsList")
//@Table(name="BOARD")
@SequenceGenerator(name="BOARD_SEQ_GENERATOR", sequenceName = "BOARD_SEQ", initialValue = 1, allocationSize = 1) //Oracle일 경우 추가
public class Board extends CommonEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOARD_SEQ_GENERATOR") //Oracle일 경우 추가
    private long bid;
    private String title;
    private String content;
    private long lookup;
    private long vote;

    private String ccode;

    private String cmain;
    /*@CreationTimestamp
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime rdate;
    @CreationTimestamp
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime udate;*/

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="mid")
    private Member member;


    @ManyToMany
    Set<Member> voter;


    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private List<Comments> commentsList;

}
