package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;
import lombok.Data;

import java.text.ParseException;

@Data
public abstract class NormalizeFieldBase {
    private int start;
    private int end;

    public NormalizeFieldBase(int start, int end) {
        this.start = start;
        this.end = end;
    }

    public abstract void formatData(OperationDTO operationDTO, String value ) throws ParseException;

}
