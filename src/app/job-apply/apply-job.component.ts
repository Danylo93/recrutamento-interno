import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  jobId: number | undefined;
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    // Inicializa o jobId como undefined
    this.jobId = undefined;

    // Captura o ID da vaga da rota
    this.route.params.subscribe(params => {
      this.jobId = +params['id']; // Converte para número

      // Carrega os detalhes da vaga com base no ID
      this.jobService.getJobById(this.jobId!).subscribe(job => {
        this.job = job;
      });
    });
  }

  apply(): void {
    // Lógica para enviar a candidatura
    console.log(`Candidatando-se para a vaga ${this.job.title}`);

    // Após a candidatura, navega de volta para a lista de vagas
    // this.router.navigate(['/candidate-panel']);
  }
}
