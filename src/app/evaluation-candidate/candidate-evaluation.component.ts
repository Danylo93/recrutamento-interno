import { Component, OnInit } from '@angular/core';
import { EvaluationService } from './evaluation.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackModalComponent } from './feedback-modal.component';

@Component({
  selector: 'app-candidate-evaluation',
  templateUrl: './candidate-evaluation.component.html',
  styleUrls: ['./candidate-evaluation.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, FeedbackModalComponent]
})
export class CandidateEvaluationComponent implements OnInit {
  candidates: any[] = []; // Array para armazenar os candidatos
  filters = { requirement: '', experience: '' }; // Filtros de requisitos e experiência
  showModal = false; // Controla a exibição do modal
  selectedCandidate: any; // Candidato selecionado para avaliação
  token: string = ''; // Variável para armazenar o token

  constructor(private evaluationService: EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || ''; // Obter token do localStorage
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.evaluationService.getCandidates(1, this.filters, this.token).subscribe(
      candidates => {
        this.candidates = candidates;
        console.log('Candidatos carregados:', this.candidates);
      },
      error => {
        console.error('Erro ao carregar candidatos:', error);
      }
    );
  }

  applyFilter(): void {
    this.loadCandidates(); // Recarregar candidatos com o novo filtro
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
