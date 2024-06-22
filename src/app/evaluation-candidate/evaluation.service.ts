import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor() { }

  getCandidates(jobId: number, filters: any): Observable<any[]> {
    // Simulando dados fictícios de candidatos para avaliação
    const candidates = [
      { id: 1, name: 'João Silva', experience: '5 anos', requirementsMet: 'Sim' },
      { id: 2, name: 'Maria Santos', experience: '3 anos', requirementsMet: 'Sim' },
      { id: 3, name: 'José Oliveira', experience: '7 anos', requirementsMet: 'Sim' },
      { id: 4, name: 'Ana Souza', experience: '2 anos', requirementsMet: 'Não' }
    ];

    // Simular filtro básico por requisito
    if (filters.requirement) {
      const filteredCandidates = candidates.filter(candidate =>
        candidate.requirementsMet.toLowerCase() === filters.requirement.toLowerCase()
      );
      return of(filteredCandidates);
    }

    return of(candidates);
  }
}
