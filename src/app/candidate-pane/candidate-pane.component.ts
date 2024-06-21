import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-candidate-panel',
  templateUrl: './candidate-pane.component.html',
  styleUrls: ['./candidate-pane.component.css']
})
export class CandidatePanelComponent implements OnInit {
  applications: any[] = [];
  candidateId = 1; // Exemplo de candidate ID, você pode ajustar conforme necessário

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.loadApplicationsByCandidateId(this.candidateId);
  }

  loadApplicationsByCandidateId(candidateId: number) {
    this.applicationService.getApplicationsByCandidateId(candidateId).subscribe(
      (applications) => {
        this.applications = applications;
      },
      (error) => {
        console.error('Erro ao carregar aplicações por candidate ID:', error);
      }
    );
  }
}
