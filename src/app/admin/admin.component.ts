// admin.component.ts

import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [ FormsModule, CommonModule ],
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  jobs: any[] = [];
  newJob = { title: '', description: '', requirements: '' };

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  addJob(): void {
    if (this.newJob.title && this.newJob.description && this.newJob.requirements) {
      this.jobService.addJob(this.newJob).subscribe(() => {
        this.loadJobs();
        this.newJob = { title: '', description: '', requirements: '' }; // Reset form
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  deleteJob(id: number): void {
    this.jobService.deleteJob(id).subscribe(() => {
      this.loadJobs();
    });
  }

  logout(): void {
    // Lógica para deslogar o usuário (limpar token, redirecionar para a página de login, etc.)
    // Por exemplo:
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
