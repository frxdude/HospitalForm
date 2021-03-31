package com.cs314.backend.Controller;

import com.cs314.backend.DTO.PatientDTO;
import com.cs314.backend.Model.History;
import com.cs314.backend.Model.Patient;
import com.cs314.backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class MainController {
    @Autowired
    DiseaseRepository disRepo;
    @Autowired
    DoctorRepository docRepo;
    @Autowired
    HistoryRepository hisRepo;
    @Autowired
    HospitalRepository hosRepo;
    @Autowired
    PatientRepository patRepo;

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();

    //Disease
    @GetMapping("/Disease")
    private ResponseEntity<?> getDisease() {
        return new ResponseEntity<>(disRepo.findAll(), HttpStatus.OK);
    }

    //Hospital
    @GetMapping("/Hospital")
    private ResponseEntity<?> getHospital() {
        return new ResponseEntity<>(hosRepo.findAll(), HttpStatus.OK);
    }

    //History
    @GetMapping("/History")
    private ResponseEntity<?> getHistory() {
        return new ResponseEntity<>(hisRepo.findAll(), HttpStatus.OK);
    }

    //Doctor
    @GetMapping("/Doctor")
    private ResponseEntity<?> getDoctor() {
        return new ResponseEntity<>(docRepo.findAll(), HttpStatus.OK);
    }

    //Patient
    @GetMapping("/Patient")
    private ResponseEntity<?> getPatient() {
        return new ResponseEntity<>(patRepo.findAll(), HttpStatus.OK);
    }

    @PostMapping("/Patient")
    private ResponseEntity<?> addPatient(@RequestBody PatientDTO patientDTO) {

        try {
            Patient newPatient = new Patient();
            newPatient.setFirstName(patientDTO.getFirstName());
            newPatient.setLastName(patientDTO.getLastName());
            long newPatientId = patRepo.save(newPatient).getId();

            History newHistory = new History();
            newHistory.setDate(now.format(dtf));
            newHistory.setDescription(patientDTO.getDescription());
            newHistory.setDiseaseId(patientDTO.getDiseaseId());
            newHistory.setDoctorId(patientDTO.getDoctorId());
            newHistory.setHospitalId(patientDTO.getHospitalId());
            newHistory.setPatientId(newPatientId);
            hisRepo.save(newHistory);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
//
//    @PutMapping("/Patient")
//    private void updatePatient() {
//
//    }
//
//    @DeleteMapping("/Patient")
//    private void deletePatient() {
//
//    }

}
