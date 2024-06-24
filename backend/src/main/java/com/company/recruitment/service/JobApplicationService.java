package com.company.recruitment.service;

import com.company.recruitment.model.JobApplication;
import com.company.recruitment.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;

    @Autowired
    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public List<JobApplication> getApplicationsByCandidateId(Long candidateId) {
        return jobApplicationRepository.findByCandidateId(candidateId);
    }
}
