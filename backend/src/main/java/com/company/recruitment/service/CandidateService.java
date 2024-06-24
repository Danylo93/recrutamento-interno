package com.company.recruitment.service;

import com.company.recruitment.model.JobApplication;

import java.util.List;

public interface CandidateService {
    List<JobApplication> getApplicationsByCandidate(Long candidateId);
}
