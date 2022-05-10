package com.ms.financialupload.service;

import com.ms.financialupload.exceptions.NotFoundException;
import com.ms.financialupload.model.TypeTransaction;
import com.ms.financialupload.repositories.TypeTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeTransactionService {

    @Autowired
    private TypeTransactionRepository typeTransactionRepository;

    public TypeTransaction findById(Long id) {
        return this.typeTransactionRepository.findById(id).orElseThrow(() -> new NotFoundException("TypeTransaction", "id", id));
    }
}
