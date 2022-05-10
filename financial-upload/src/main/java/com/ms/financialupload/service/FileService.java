package com.ms.financialupload.service;

import com.ms.financialupload.DTOs.OperationDTO;
import com.ms.financialupload.DTOs.StoreName;
import com.ms.financialupload.model.Operation;
import com.ms.financialupload.model.TypeTransaction;
import com.ms.financialupload.repositories.OperationRepository;
import com.ms.financialupload.utils.NormalizeFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.List;
import java.util.stream.Stream;

@Service
public class FileService {

    Logger logger = LoggerFactory.getLogger(FileService.class);

    @Autowired
    private OperationRepository operationRepository;

    @Autowired
    private TypeTransactionService typeTransactionService;

    public void processNormalizeAndPersistence(Stream<String> lines) {
        lines.forEach( i -> {
            try {
                this.normalizeAndPersistence(i);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
        });
    }

    public Operation normalizeAndPersistence(String line) throws ParseException {
        NormalizeFile normalizeFile = new NormalizeFile();
        try {
            Operation operation = new Operation();
            OperationDTO operationDTO = normalizeFile.normalize(line);

            TypeTransaction transaction = this.typeTransactionService.findById(operationDTO.getType());

            BeanUtils.copyProperties(operationDTO, operation);

            operation.setType(transaction);
            this.operationRepository.save(operation);

            logger.info("processed line: " + line);

            return operation;

        } catch (ParseException e) {
            logger.error(e.getMessage());
            throw e;
        }
    }

    public Page<Operation> findAll(String storeName, Pageable pageable) {
        return this.operationRepository.findByStoreNameContainingIgnoreCase(storeName, pageable);
    }

    public BigDecimal sumOperations(String storeName) {
        return this.operationRepository.sumOperation(storeName);
    }

    public List<StoreName> findAllStoreName() {
        return this.operationRepository.findAllStoreName();
    }
}
