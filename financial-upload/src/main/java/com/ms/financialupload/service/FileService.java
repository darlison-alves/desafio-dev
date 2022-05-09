package com.ms.financialupload.service;

import com.ms.financialupload.DTOs.OperationDTO;
import com.ms.financialupload.utils.NormalizeFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.stream.Stream;

@Service
public class FileService {

    Logger logger = LoggerFactory.getLogger(FileService.class);

    public void processNormalizeAndPersistence(Stream<String> lines) {
        lines.forEach( i -> {
            try {
                this.normalizeAndPersistence(i);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private void normalizeAndPersistence(String line) throws ParseException {
        NormalizeFile normalizeFile = new NormalizeFile();
        try {
            OperationDTO operationDTO = normalizeFile.normalize(line);
        } catch (ParseException e) {
            logger.error(e.getMessage());
            throw e;
        }

        logger.info("processed line: " + line);
    }
}
