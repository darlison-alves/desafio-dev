package com.ms.financialupload.DTOs;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class SumOperation {
    private BigDecimal amount;

    public SumOperation(BigDecimal amount) {
        this.amount = amount;
    }
}
