package com.company.recruitment.service;

import com.company.recruitment.model.Job;
import com.company.recruitment.model.JobApplication;

import java.util.List;

public interface JobService {
    List<Job> getAllJobs();
    Job createJob(Job job);
    Job updateJob(Long id, Job job);
    Job getJobById(Long id);
    JobApplication applyForJob(Long jobId, String candidateName, String candidateEmail); // Adicionado este método
    void deleteJob(Long id);
}
