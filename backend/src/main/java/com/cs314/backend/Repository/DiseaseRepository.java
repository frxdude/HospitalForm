package com.cs314.backend.Repository;

import com.cs314.backend.Model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
}
