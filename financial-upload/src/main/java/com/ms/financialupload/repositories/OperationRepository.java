package com.ms.financialupload.repositories;

import com.ms.financialupload.DTOs.StoreName;
import com.ms.financialupload.model.Operation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Long> {

    @Query("SELECT SUM(o.amount) FROM Operation o WHERE o.storeName LIKE CONCAT('%',:storeName, '%')")
    BigDecimal sumOperation(@Param("storeName") String storeName);

    @Query("SELECT DISTINCT new com.ms.financialupload.DTOs.StoreName(o.storeName) FROM Operation o")
    List<StoreName> findAllStoreName();

    Page<Operation> findByStoreNameContainingIgnoreCase(String storeName, Pageable pageable);

}
