package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DataNormalize extends NormalizeFieldBase {
    public DataNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        Date date = dateFormat.parse(value);
        operationDTO.setDate(date);
    }

}
