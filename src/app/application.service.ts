import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8081/api/applications'; // URL base da sua API

  constructor(private http: HttpClient) { }

  // Método para obter aplicações por job ID
  getApplicationsByJobId(jobId: number): Observable<any[]> {
    const url = `${this.baseUrl}/job/${jobId}`;
    return this.http.get<any[]>(url);
  }

  // Método para obter aplicações por candidate ID
  getApplicationsByCandidateId(candidateId: number): Observable<any[]> {
    const url = `${this.baseUrl}/candidate/${candidateId}`;
    return this.http.get<any[]>(url);
  }
}
