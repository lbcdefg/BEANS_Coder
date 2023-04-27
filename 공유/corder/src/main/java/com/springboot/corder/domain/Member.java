package com.springboot.corder.domain;

import com.springboot.corder.domain.CommonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="MEMBER")
@Entity
@SequenceGenerator(name="MEMBER_SEQ_GENERATOR", sequenceName = "MEMBER_SEQ", initialValue = 1, allocationSize = 1) //Oracle일 경우 추가

public class Member extends CommonEntity {
    //@Id @GeneratedValue(strategy = GenerationType.IDENTITY) //h2 DB일 경우 추가
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_SEQ_GENERATOR") //Oracle일 경우 추가
    private long mid;

    private String email;

    private String name;

    private String nick;

    private String password;

    private String fname;
    private String ofname;
    private String savedpath;


    //private String fname;
    //private String ofname;
    //private String savedpath;

    /*@CreationTimestamp
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private Date rdate;
    @CreationTimestamp
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private Date udate;*/
}
