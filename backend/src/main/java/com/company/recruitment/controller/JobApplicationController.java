package com.company.recruitment.controller;

import com.company.recruitment.model.JobApplication;
import com.company.recruitment.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.company.recruitment.service.CustomUserDetails;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @GetMapping("/my-applications")
    public List<JobApplication> getMyApplications(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Long candidateId = userDetails.getId();
        return jobApplicationService.getApplicationsByCandidateId(candidateId);
    }
}
