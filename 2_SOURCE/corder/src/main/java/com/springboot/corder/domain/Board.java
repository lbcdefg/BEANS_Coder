package com.springboot.corder.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString(exclude = "commentsList")
@DynamicUpdate
//@Table(name="BOARD")
@SequenceGenerator(name="BOARD_SEQ_GENERATOR", sequenceName = "BOARD_SEQ", initialValue = 1, allocationSize = 1) //Oracle일 경우 추가
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOARD_SEQ_GENERATOR") //Oracle일 경우 추가
    private long bid;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "lookup")
    private long lookup;
    @Column(name = "vote")
    private long vote;

    @Column(name = "ccode")
    private String ccode;

    @Column(name = "cmain")
    private String cmain;
    @CreationTimestamp
    @Column(name = "rdate", updatable = false, nullable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime rdate;
    @CreationTimestamp
    @Column(name = "udate", nullable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime udate;

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="mid")
    private Member member;


    @ManyToMany
    Set<Member> plusVoter;

    @ManyToMany
    Set<Member> minusVoter;


    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private List<Comments> commentsList;

}
