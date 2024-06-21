import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent {
  job: any;
  applicantName: string = '';
  applicantEmail: string = '';

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobService.getJobById(jobId);
  }

  apply() {
    // Implementar lógica de candidatura
    alert(`Candidatura enviada para ${this.job.title} por ${this.applicantName}`);
  }
}
