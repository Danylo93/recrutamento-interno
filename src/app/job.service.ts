import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8081/api/jobs';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        mode: 'no-cors',
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, { headers: this.getHeaders() });
  }

  getJobById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }

  applyForJob(jobId: number, candidateId: string, application: any): Observable<any> { // Ajuste o tipo de candidateId para string
    return this.http.post<any>(`${this.baseUrl}/${jobId}/apply`, { candidateId, ...application }, { headers: this.getHeaders() });
  }

  addJob(job: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, job, { headers: this.getHeaders() });
  }

  updateJob(id: number, updatedJob: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedJob, { headers: this.getHeaders() });
  }
  
  deleteJob(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers: this.getHeaders() });
  }

  // Método para verificar se o candidato já se candidatou à vaga
  hasApplied(jobId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/candidates/${jobId}/has-applied`, { headers: this.getHeaders() });
  }

}
