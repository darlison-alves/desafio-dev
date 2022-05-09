package com.ms.financialupload.service;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@Builder
public class TypeTransaction {

    @Id
    private Long id;

    @Column
    private String description;

    @Column
    private String nature;

}
