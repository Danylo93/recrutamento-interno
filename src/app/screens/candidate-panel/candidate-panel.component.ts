// my-applications.component.ts

import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../admin/auth.service';

@Component({
  imports: [ FormsModule, CommonModule, RouterModule ],
  standalone: true,
  selector: 'app-candidate-panel',
  templateUrl: './candidate-panel.component.html',
  styleUrls: ['./candidate-panel.component.css']
})
export class CandidatePanelComponent implements OnInit {
  applications: any[] = []; // Array para armazenar as candidaturas do candidato
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private candidateService: CandidateService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.candidateService.getApplications().subscribe(
      (data) => {
        this.applications = data;
      },
      (error) => {
        console.error('Error loading applications:', error);
        // Tratar erros aqui, exibir mensagem de erro na UI, etc.
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToOpenJobs(): void {
    // Navegar para a página de vagas abertas
    this.router.navigate(['/jobs']);
  }
}
