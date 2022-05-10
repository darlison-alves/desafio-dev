package com.ms.financialupload.application.chainOfResponsibility;

import com.ms.financialupload.DTOs.OperationDTO;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class HourNormalize extends NormalizeFieldBase {
    public HourNormalize(int start, int end) {
        super(start, end);
    }

    @Override
    public void formatData(OperationDTO operationDTO, String value) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("hhmmss");
        Date time = dateFormat.parse(value);
        operationDTO.setHour(time);
    }

}
