package com.company.recruitment.model;

public class CandidateDashboardData {
    private Long candidateId;
    private String fullName;
    private String email;
    // Adicione outros campos conforme necessário

    // Construtor, getters e setters
    public CandidateDashboardData(Long candidateId, String fullName, String email) {
        this.candidateId = candidateId;
        this.fullName = fullName;
        this.email = email;
    }

    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
