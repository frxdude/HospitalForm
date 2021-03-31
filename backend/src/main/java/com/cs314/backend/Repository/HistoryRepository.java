package com.cs314.backend.Repository;

import com.cs314.backend.Model.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
