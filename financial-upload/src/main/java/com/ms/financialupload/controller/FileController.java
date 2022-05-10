package com.ms.financialupload.controller;

import com.ms.financialupload.DTOs.ResponseUpload;
import com.ms.financialupload.DTOs.StoreName;
import com.ms.financialupload.DTOs.SumOperation;
import com.ms.financialupload.model.Operation;
import com.ms.financialupload.service.FileService;
import com.ms.financialupload.utils.NormalizeFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.util.List;


@RestController
@RequestMapping("/operations")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8));
            this.fileService.processNormalizeAndPersistence(bufferedReader.lines());

            return ResponseEntity.ok(new ResponseUpload("upload success"));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Page<Operation>> findAll(@PageableDefault( page = 0, size = 10) Pageable pageable, @RequestParam(value = "storeName", defaultValue = "") String storeName) {
        Page<Operation> operations = this.fileService.findAll(storeName, pageable);
        return ResponseEntity.ok(operations);
    }

    @GetMapping("/sum")
    public ResponseEntity<?> sumOperation( @RequestParam(value = "storeName", defaultValue = "") String storeName ) {
        BigDecimal amount = this.fileService.sumOperations(storeName);
        return ResponseEntity.ok(new SumOperation(amount));
    }

    @GetMapping("/store-names")
    public ResponseEntity<List<StoreName>> findAllStoreName() {
        List<StoreName> storeNames = this.fileService.findAllStoreName();
        return ResponseEntity.ok(storeNames);
    }
}
