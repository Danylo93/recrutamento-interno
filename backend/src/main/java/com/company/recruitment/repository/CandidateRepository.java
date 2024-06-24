package com.company.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.recruitment.model.Candidate;
import com.company.recruitment.model.User;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    Candidate findByUser(User user);
}
