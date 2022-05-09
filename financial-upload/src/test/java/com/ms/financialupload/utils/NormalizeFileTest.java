package com.ms.financialupload.utils;

import com.ms.financialupload.DTOs.OperationDTO;
import com.ms.financialupload.application.chainOfResponsibility.StoreNameNormalize;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
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
}
