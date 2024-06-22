import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  getApplications(): Observable<any[]> {
    // Simulando dados fictícios de candidaturas
    const applications = [
      { id: 1, jobTitle: 'Desenvolvedor Web', status: 'Em análise', feedback: '' },
      { id: 2, jobTitle: 'Engenheiro de Software', status: 'Reprovado', feedback: 'Falta experiência' },
      { id: 3, jobTitle: 'UX/UI Designer', status: 'Aprovado', feedback: 'Aguardando contato' }
    ];
    return of(applications);
  }
}
