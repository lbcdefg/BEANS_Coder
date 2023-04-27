package com.springboot.corder.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Data
@Table(name="category")
public class Category {
    @Id
    @Column(name = "ccode")
    private String ccode;
    private String cmain;

}
