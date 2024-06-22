import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EvaluationService } from './evaluation.service';

@Component({
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  selector: 'app-candidate-evaluation',
  templateUrl: './candidate-evaluation.component.html',
  styleUrls: ['./candidate-evaluation.component.css']
})
export class CandidateEvaluationComponent implements OnInit {
  jobId: number | null = null; // Inicializar jobId como null
  candidates: any[] = []; // Array para armazenar os candidatos
  filters = { requirement: '', experience: '' }; // Filtros de requisitos e experiência

  constructor(
    private route: ActivatedRoute,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit(): void {
    const jobIdParam = this.route.snapshot.paramMap.get('id'); // Obter o ID da vaga da rota

    // Verificar se jobIdParam não é null antes de converter para número
    if (jobIdParam !== null) {
      this.jobId = +jobIdParam;

      // Carregar candidatos para a vaga específica
      this.loadCandidates();
    } else {
      console.error('ID da vaga não encontrado na rota.');
      // Tratar o caso em que não há ID de vaga na rota
    }
  }

  loadCandidates(): void {
    if (this.jobId !== null) {
      this.evaluationService.getCandidates(this.jobId, this.filters).subscribe(data => {
        this.candidates = data;
      });
    } else {
      console.error('ID da vaga não definido para carregar candidatos.');
      // Tratar o caso em que jobId ainda é null
    }
  }
}
