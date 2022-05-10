package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

import java.math.BigDecimal;

public class AmountNormalize extends NormalizeFieldBase {
    public AmountNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) {
        BigDecimal amount = new BigDecimal(value);
        operationDTO.setAmount(amount.divide(BigDecimal.valueOf(100)));
    }

}
