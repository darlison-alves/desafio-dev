package com.ms.financialupload.utils;

import com.ms.financialupload.DTOs.OperationDTO;
import com.ms.financialupload.application.chainOfResponsibility.*;

import java.text.ParseException;
import java.util.ArrayList;

public class NormalizeFile {

    private ArrayList<NormalizeFieldBase> normalizeFieldBases;

    public NormalizeFile() {
        this.normalizeFieldBases = new ArrayList<>();
        this.init();
    }

    public OperationDTO normalize(String line) throws ParseException {
        OperationDTO operationDTO = new OperationDTO();
        for (NormalizeFieldBase fieldBase : this.normalizeFieldBases) {
            String value = line.substring(fieldBase.getStart(), fieldBase.getEnd());
            fieldBase.formatData(operationDTO, value);
        }
        return operationDTO;
    }

    private void init() {
        this.normalizeFieldBases.add(new TypeNormalize(0, 1));
        this.normalizeFieldBases.add(new DataNormalize(1, 9));
        this.normalizeFieldBases.add(new AmountNormalize(9, 19));
        this.normalizeFieldBases.add(new CPFNormalize(19, 30));
        this.normalizeFieldBases.add(new CardNormalize(30, 42));
        this.normalizeFieldBases.add(new HourNormalize(42, 48));
        this.normalizeFieldBases.add(new StoreOwnerNormalize(48, 62));
        this.normalizeFieldBases.add(new StoreNameNormalize(62, 80));
    }
}
