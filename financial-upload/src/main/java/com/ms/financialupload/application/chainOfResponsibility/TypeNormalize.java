package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

public class TypeNormalize extends NormalizeFieldBase {
    public TypeNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) {
        operationDTO.setType(Long.parseLong(value));
    }

}
