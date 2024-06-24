import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  jobId: number = 0; // Inicializar com um valor padrão
  job: any;
  applicationForm: FormGroup;
  candidateId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
   
  ) {
    this.applicationForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      this.jobService.getJobById(this.jobId).subscribe(data => {
        this.job = data;
      });
    });

    this.authService.fetchUsersAll().subscribe(users => {
      const token = localStorage.getItem('token');
      if (token) {
        const helper = new JwtHelperService();
        const decodedToken: any = helper.decodeToken(token);
        const loggedInUsername = decodedToken.sub;

        const loggedInUser = users.find(user => user.username === loggedInUsername);
        if (loggedInUser) {
          this.candidateId = loggedInUser.id;
        } else {
          console.log("Usuario Logado >", loggedInUser)
          console.error('Usuário não encontrado com o nome de usuário presente no token.', loggedInUser);
        }
      } else {
        console.error('Token não encontrado no armazenamento local.');
      }
    });
  }

  apply(): void {
    if (this.applicationForm.valid && this.candidateId) {
      this.jobService.applyForJob(this.jobId, `${this.candidateId}`, this.applicationForm.value).subscribe(response => {
        this.router.navigate(['/candidate-panel']);
        console.log('Aplicação enviada com sucesso', response);
      }, error => {
        console.error('Erro ao enviar aplicação:', error);
      });
    } else {
      console.error('Formulário de aplicação inválido ou ID do candidato não encontrado.');
    }
  }
   
  }


  


  

