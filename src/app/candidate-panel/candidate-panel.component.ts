// my-applications.component.ts

import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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
  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.loadApplications(); // Carregar as candidaturas ao inicializar o componente
  }

  loadApplications(): void {
    this.candidateService.getApplications().subscribe(data => {
      this.applications = data;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateToOpenJobs(): void {
    // Navegar para a página de vagas abertas
    this.router.navigate(['/jobs']);
  }
}
