package com.springboot.corder.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberImageUpDto {
    private String fname;
    private String ofname;
    private String savedpath;
}
