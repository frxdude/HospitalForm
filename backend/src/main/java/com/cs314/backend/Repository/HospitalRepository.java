package com.cs314.backend.Repository;

import com.cs314.backend.Model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {
}
