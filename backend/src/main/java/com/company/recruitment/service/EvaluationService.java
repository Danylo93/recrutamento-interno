package com.company.recruitment.service;

import com.company.recruitment.model.Evaluation;
import java.util.List;

public interface EvaluationService {
    Evaluation save(Evaluation evaluation);
    Evaluation findById(Long id);
    List<Evaluation> findAll();
    // Outros métodos relacionados à gestão de avaliações
}
