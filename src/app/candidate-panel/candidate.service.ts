import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseUrl = 'http://localhost:8081/api'; // Base URL do seu backend

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getApplications(): Observable<any[]> {
    // Aqui você pode modificar para pegar as candidaturas do candidato autenticado
    // Supondo que o backend gerencie isso através do token ou alguma identificação de usuário
    return this.http.get<any[]>(`${this.baseUrl}/candidates/${8}/applications`, { headers: this.getHeaders() });
  }
}
