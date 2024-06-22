// candidate-evaluation.component.ts

import { Component, OnInit } from '@angular/core';
import { EvaluationService } from './evaluation.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackModalComponent } from "./feedback-modal.component";

@Component({
    standalone: true,
    selector: 'app-candidate-evaluation',
    templateUrl: './candidate-evaluation.component.html',
    styleUrls: ['./candidate-evaluation.component.css'],
    imports: [FormsModule, CommonModule, FeedbackModalComponent]
})
export class CandidateEvaluationComponent implements OnInit {
  candidates: any[] = []; // Array para armazenar os candidatos
  filters = { requirement: '', experience: '' }; // Filtros de requisitos e experiência
  showModal: boolean = false; // Controla a exibição do modal
  selectedCandidate: any; // Candidato selecionado para avaliação

  constructor(private evaluationService: EvaluationService, private router: Router) { }

  ngOnInit(): void {
    // Carregar todos os candidatos inicialmente
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.evaluationService.getCandidates(0, this.filters).subscribe(data => {
      this.candidates = data;
    });
  }

  applyFilters(): void {
    this.evaluationService.getCandidates(0, this.filters).subscribe(data => {
      this.candidates = data;
    });
  }

  evaluateCandidate(candidate: any): void {
    // Mostrar o modal para avaliar o candidato
    this.showModal = true;
    this.selectedCandidate = candidate;
  }

  submitFeedback(feedback: string): void {
    // Aqui você pode enviar o feedback para o serviço ou realizar outra ação necessária
    console.log(`Feedback para ${this.selectedCandidate.name}: ${feedback}`);
    this.showModal = false; // Fechar o modal após enviar o feedback
  }

  closeModal(): void {
    this.showModal = false; // Fechar o modal ao clicar no botão Fechar
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
