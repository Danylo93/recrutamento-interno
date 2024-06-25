import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/applications/my-applications`, { headers: this.getHeaders() });
  }
}
