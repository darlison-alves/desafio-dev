package com.ms.financialupload.repositories;

import com.ms.financialupload.model.TypeTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeTransactionRepository extends JpaRepository<TypeTransaction, Long> {
}
