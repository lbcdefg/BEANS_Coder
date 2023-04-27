package com.springboot.corder.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@Table(name="FILEUP")
@Entity
@SequenceGenerator(name="FILEUP_SEQ_GENERATOR", sequenceName = "FILEUP_SEQ", initialValue = 1, allocationSize = 1)
public class FileUp {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "FILEUP_SEQ_GENERATOR") //Oracle일 경우 추가
    @Column(name="fid")
    private Long fid;
    private String fname;
    private String ofname;
    private String savedpath;

    @ManyToOne(fetch = FetchType.LAZY) //지연로딩(LAZY)  or 즉시로딩(EAGER)
    @JoinColumn(name="bid")
    private Board board;

    @Builder
    public FileUp(Long id, String orgnm, String savednm, String savedpath, Board board) {
        this.fid = id;
        this.fname = savednm;
        this.ofname = orgnm;
        this.savedpath = savedpath;
        this.board=board;
    }
}
