import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  applyForJob(id: number): void {
    // Navega para o ApplyJobComponent com o ID da vaga como parâmetro
    this.router.navigate(['/apply', id]);
  }

  goToHomePage(){

  }
}
