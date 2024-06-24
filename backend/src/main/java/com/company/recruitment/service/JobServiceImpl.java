package com.company.recruitment.service;

import com.company.recruitment.model.Candidate;
import com.company.recruitment.model.Job;
import com.company.recruitment.model.JobApplication;
import com.company.recruitment.model.User;
import com.company.recruitment.repository.CandidateRepository;
import com.company.recruitment.repository.JobApplicationRepository;
import com.company.recruitment.repository.JobRepository;
import com.company.recruitment.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final CandidateRepository candidateRepository;
    private final UserRepository userRepository;

    @Autowired
    public JobServiceImpl(JobRepository jobRepository,
                          JobApplicationRepository jobApplicationRepository,
                          CandidateRepository candidateRepository,
                          UserRepository userRepository) {
        this.jobRepository = jobRepository;
        this.jobApplicationRepository = jobApplicationRepository;
        this.candidateRepository = candidateRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    @Override
    public Job updateJob(Long id, Job job) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        if (optionalJob.isPresent()) {
            Job existingJob = optionalJob.get();
            existingJob.setTitle(job.getTitle());
            existingJob.setDescription(job.getDescription());
            existingJob.setRequirements(job.getRequirements());
            return jobRepository.save(existingJob);
        } else {
            throw new RuntimeException("Job not found with id " + id);
        }
    }

    @Override
    public Job getJobById(Long id) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        return optionalJob.orElse(null);
    }

    @Override
    @Transactional
    public JobApplication applyForJob(Long jobId, String candidateName, String candidateEmail) {
        // Obtém o usuário autenticado
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof UsernamePasswordAuthenticationToken)) {
            throw new RuntimeException("Usuário não autenticado ou autenticação inválida.");
        }
    
        // Assumindo que o principal é uma instância de CustomUserDetails
        Object principal = authentication.getPrincipal();
        Long userId;
        if (principal instanceof CustomUserDetails) {
            userId = ((CustomUserDetails) principal).getId();
        } else {
            throw new RuntimeException("Principal não é uma instância de CustomUserDetails.");
        }
    
        System.out.println("ID do usuário autenticado: " + userId);

        
    
        // Cria a aplicação de vaga
        JobApplication application = new JobApplication();
        application.setJobId(jobId);
        application.setCandidateId(userId);
        application.setCandidateName(candidateName);
        application.setCandidateEmail(candidateEmail);
        application.setStatus("Pendente");
    
        // Salva a aplicação no banco de dados
        return jobApplicationRepository.save(application);
    }
    
    
    @Override
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
