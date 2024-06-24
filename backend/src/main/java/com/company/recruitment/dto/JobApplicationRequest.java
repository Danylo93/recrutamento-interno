package com.company.recruitment.dto;
import com.company.recruitment.model.JobApplication;

// JobApplicationRequest.java
public class JobApplicationRequest {
    private Long candidateId;
    private JobApplication application;

    // Getters and setters
    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }

    public JobApplication getApplication() {
        return application;
    }

    public void setApplication(JobApplication application) {
        this.application = application;
    }
}
