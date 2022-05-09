package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

public class CPFNormalize extends NormalizeFieldBase {
    public CPFNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) {
        operationDTO.setDocument(value);
    }

}
