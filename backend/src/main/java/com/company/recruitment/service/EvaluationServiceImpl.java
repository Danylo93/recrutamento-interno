package com.company.recruitment.service;

import com.company.recruitment.model.Evaluation;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class EvaluationServiceImpl implements EvaluationService {

    private List<Evaluation> evaluations = new ArrayList<>();

    @Override
    public Evaluation save(Evaluation evaluation) {
        evaluation.setId((long) (evaluations.size() + 1)); // Simulação de geração de ID
        evaluations.add(evaluation);
        return evaluation;
    }

    @Override
    public Evaluation findById(Long id) {
        return evaluations.stream()
                .filter(evaluation -> evaluation.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public List<Evaluation> findAll() {
        return evaluations;
    }

    // Outros métodos de implementação conforme necessário
}
