// job.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:8081/api/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addJob(job: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, job);
  }

  updateJob(id: number, updatedJob: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedJob);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
