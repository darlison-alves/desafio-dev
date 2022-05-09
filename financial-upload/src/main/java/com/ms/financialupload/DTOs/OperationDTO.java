package com.ms.financialupload.DTOs;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class OperationDTO {
    private Long type;
    private Date date;
    private BigDecimal amount;
    private String document;
    private String card;
    private String hour;
    private String storeOwner;
    private String storeName;
}
