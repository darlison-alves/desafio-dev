package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

public class StoreOwnerNormalize extends NormalizeFieldBase {
    public StoreOwnerNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) {
        operationDTO.setStoreOwner(value);
    }

}
