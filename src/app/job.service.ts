// job.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    { id: 1, title: 'Desenvolvedor Frontend', description: 'Desenvolvimento de interfaces web.', requirements: 'Angular, TypeScript' },
    { id: 2, title: 'Desenvolvedor Backend', description: 'Desenvolvimento de APIs.', requirements: 'Node.js, Express' },
    { id: 3, title: 'Analista de QA', description: 'Garantia de qualidade de software.', requirements: 'Testes automatizados, Selenium' }
  ];

  private applications = [
    { id: 1, jobId: 1, jobTitle: 'Desenvolvedor Frontend', status: 'Pendente', feedback: '' },
    { id: 2, jobId: 2, jobTitle: 'Desenvolvedor Backend', status: 'Aceito', feedback: 'Ótimo candidato!' }
  ];

  constructor() { }

  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJobById(id: number): Observable<any> {
    const job = this.jobs.find(job => job.id === id);
    return of(job);
  }

  addJob(job: any): Observable<any> {
    job.id = this.jobs.length + 1;
    this.jobs.push(job);
    return of(job);
  }

  updateJob(id: number, updatedJob: any): Observable<any> {
    const index = this.jobs.findIndex(job => job.id === id);
    if (index !== -1) {
      this.jobs[index] = { ...this.jobs[index], ...updatedJob };
    }
    return of(this.jobs[index]);
  }

  deleteJob(id: number): Observable<any> {
    const index = this.jobs.findIndex(job => job.id === id);
    if (index !== -1) {
      this.jobs.splice(index, 1);
    }
    return of(null);
  }

  getApplicationsForJob(jobId: number): Observable<any[]> {
    const applications = this.applications.filter(app => app.jobId === jobId);
    return of(applications);
  }

  applyForJob(jobId: number): Observable<any> {
    const newApplication = {
      id: this.applications.length + 1,
      jobId: jobId,
      jobTitle: this.jobs.find(job => job.id === jobId)?.title || 'Vaga não encontrada',
      status: 'Pendente',
      feedback: ''
    };
    this.applications.push(newApplication);
    return of(newApplication);
  }
}
