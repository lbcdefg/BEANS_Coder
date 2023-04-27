package com.springboot.corder.dto;


import com.springboot.corder.domain.CommonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;


@Data
public class MemberFileUpDto extends CommonEntity {
    private long mid;
    private String fname;
    private String ofname;
    private String savedpath;
}
