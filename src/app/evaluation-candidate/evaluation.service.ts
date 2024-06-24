import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:8081/api/evaluations'; // Ajuste conforme necessário

  constructor(private http: HttpClient) { }

  getHeaders(token: string): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  getCandidates(jobId: number, filters: any, token: string): Observable<any[]> {
    let params = new HttpParams().set('jobId', jobId.toString());

    if (filters.requirement) {
      params = params.set('requirement', filters.requirement.toLowerCase());
    }

    const headers = this.getHeaders(token);

    return this.http.get<any[]>(`${this.apiUrl}/all`, { params, headers });
  }
}
