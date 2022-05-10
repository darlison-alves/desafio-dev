package com.ms.financialupload.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "increment")
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "typeId")
    private TypeTransaction type;

    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(scale = 2)
    private BigDecimal amount;

    @Column
    private String document;

    @Column
    private String card;

    @Temporal(TemporalType.TIME)
    private Date hour;

    @Column
    private String storeOwner;

    @Column
    private String storeName;
}
