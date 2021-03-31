package com.cs314.backend.Model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;

@EnableAutoConfiguration
@Entity
@Table(name = "Histories")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long hospitalId;
    private long doctorId;
    private long diseaseId;
    private long patientId;
    private String date;
    private String description;

    public History() {
    }

    public History(long id, long hospitalId, long doctorId, long diseaseId, long patientId, String date, String description) {
        this.id = id;
        this.hospitalId = hospitalId;
        this.doctorId = doctorId;
        this.diseaseId = diseaseId;
        this.patientId = patientId;
        this.date = date;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getHospitalId() {
        return hospitalId;
    }

    public void setHospitalId(long hospitalId) {
        this.hospitalId = hospitalId;
    }

    public long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(long doctorId) {
        this.doctorId = doctorId;
    }

    public long getDiseaseId() {
        return diseaseId;
    }

    public void setDiseaseId(long diseaseId) {
        this.diseaseId = diseaseId;
    }

    public long getPatientId() {
        return patientId;
    }

    public void setPatientId(long patientId) {
        this.patientId = patientId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
