package com.ms.financialupload.service;

import com.ms.financialupload.model.Operation;
import com.ms.financialupload.model.TypeTransaction;
import com.ms.financialupload.repositories.OperationRepository;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class FileServiceTest {

    @MockBean
    private OperationRepository operationRepository;

    @MockBean
    private TypeTransactionService typeTransactionService;

    @Autowired
    private FileService fileService;


    @Test()
    public void normalizeAndPersistence() throws ParseException {

        TypeTransaction transaction = new TypeTransaction(3L, "Test", "Entrada");
        when(typeTransactionService.findById(3L)).thenReturn(transaction);

        Operation resultOp = fileService.normalizeAndPersistence("3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ");

        SimpleDateFormat hourFormat = new SimpleDateFormat("HH:mm:ss");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        assertEquals(resultOp.getStoreName(), "BAR DO JOÃO");
        assertEquals(resultOp.getAmount(), new BigDecimal(142));
        assertEquals(resultOp.getCard(), "4753****3153");
        assertEquals(resultOp.getDocument(), "09620676017");
        assertEquals(hourFormat.format(resultOp.getHour()), "15:34:53");
        assertEquals(dateFormat.format(resultOp.getDate()), "2019-03-01");


    }
}
