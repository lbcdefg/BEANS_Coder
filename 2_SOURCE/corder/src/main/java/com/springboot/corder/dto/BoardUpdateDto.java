package com.springboot.corder.dto;


import lombok.Data;

@Data
public class BoardUpdateDto {
    private long bid;
    private String title;
    private String content;
    private long lookup;
    private long vote;
    private String ccode;

    private String cmain;
}
