package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

public class StoreNameNormalize extends NormalizeFieldBase {
    public StoreNameNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) {
        operationDTO.setStoreName(value.trim());
    }

}
