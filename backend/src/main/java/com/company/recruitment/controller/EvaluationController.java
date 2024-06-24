package com.company.recruitment.controller;

import com.company.recruitment.model.Evaluation;
import com.company.recruitment.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {

    private final EvaluationService evaluationService;

    @Autowired
    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @PostMapping("/create")
    public Evaluation createEvaluation(@RequestBody Evaluation evaluation) {
        return evaluationService.save(evaluation);
    }

    @GetMapping("/{id}")
    public Evaluation getEvaluationById(@PathVariable Long id) {
        return evaluationService.findById(id);
    }

    @GetMapping("/all")
    public List<Evaluation> getAllEvaluations() {
        return evaluationService.findAll();
    }

    // Outros métodos de endpoint conforme necessário
}
