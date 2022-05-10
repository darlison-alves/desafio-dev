package com.ms.financialupload.utils;

import com.ms.financialupload.DTOs.OperationDTO;
import com.ms.financialupload.application.chainOfResponsibility.StoreNameNormalize;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class NormalizeFileTest {

    @Test
    public void normalizeField() {
        OperationDTO operationDTO = new OperationDTO();
        StoreNameNormalize storeNameNormalize = new StoreNameNormalize(62, 80);

        String line = "3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ";
        String result = line.substring(storeNameNormalize.getStart(), storeNameNormalize.getEnd());

        storeNameNormalize.formatData(operationDTO, result);

        assertEquals(operationDTO.getStoreName(), "BAR DO JOÃO");
    }


    @Test
    public void normalizeString() throws ParseException {
        NormalizeFile normalizeFile = new NormalizeFile();
        String line = "3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ";
        OperationDTO operationDTO = normalizeFile.normalize(line);

        SimpleDateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        assertEquals(operationDTO.getStoreName(), "BAR DO JOÃO");
        assertEquals(operationDTO.getAmount(), new BigDecimal(142));
        assertEquals(operationDTO.getCard(), "4753****3153");
        assertEquals(operationDTO.getDocument(), "09620676017");
        assertEquals(hourFormat.format(operationDTO.getHour()), "15:34:53");
        assertEquals(dateFormat.format(operationDTO.getDate()), "2019-03-01");

    }
}
