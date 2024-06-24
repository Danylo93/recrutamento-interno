import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    this.router.navigate(['/apply', id]);
  }

  goToHomePage(){
      // Navegar para a página de vagas abertas
      this.router.navigate(['/candidate-panel']);
    
  }
}
