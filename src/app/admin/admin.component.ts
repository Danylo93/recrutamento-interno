// admin.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  editingJob: any = null;

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
    this.jobService.addJob(this.newJob).subscribe(job => {
      this.jobs.push(job);
      this.newJob = { title: '', description: '', requirements: '' };
    });
  }

  editJob(job: any): void {
    this.editingJob = { ...job };
  }

  updateJob(): void {
    if (this.editingJob) {
      this.jobService.updateJob(this.editingJob.id, this.editingJob).subscribe(
        updatedJob => {
          const index = this.jobs.findIndex(job => job.id === updatedJob.id);
          if (index !== -1) {
            this.jobs[index] = updatedJob;
          }
          this.editingJob = null;
        },
        error => {
          console.error('Erro ao atualizar o job:', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.editingJob = null;
  }

  deleteJob(id: number): void {
    this.jobService.deleteJob(id).subscribe(
      () => {
        this.jobs = this.jobs.filter(job => job.id !== id);
      },
      error => {
        console.error('Erro ao deletar o job:', error);
      }
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateToEvaluation(): void {
    this.router.navigate(['/evaluation-candidate']);
  }
}
