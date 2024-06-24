import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './screens/login/login.component';
import { JobListComponent } from './screens/job-list/job-list.component';
import { AdminComponent } from './screens/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './screens/admin/auth.guard';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { RoleGuard } from './screens/admin/role.guard';
import { CandidatePanelComponent } from './screens/candidate-panel/candidate-panel.component';
import { CandidateEvaluationComponent } from './screens/evaluation-candidate/candidate-evaluation.component';
import { ApplyJobComponent } from './screens/job-apply/apply-job.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobListComponent,canActivate: [AuthGuard, ], data: { roles: ['ADMIN','USER'] } },
  { path: 'access-denied', component: AccessDeniedComponent},
  { path: 'apply', component: ApplyJobComponent, canActivate: [AuthGuard, ], data: { roles: ['ADMIN','USER'] } },
  { path: 'apply/:id', component: ApplyJobComponent, canActivate: [AuthGuard, ], data: { roles: ['ADMIN','USER'] } },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] , data: { roles: ['ADMIN','USER'] } },
  { path: 'candidate-panel', component: CandidatePanelComponent, canActivate: [AuthGuard, ], data: { roles: ['ADMIN','USER'] } },
  { path: 'evaluation-candidate', component: CandidateEvaluationComponent, canActivate: [AuthGuard, ] , data: { roles: ['ADMIN','USER'] } },
  { path: 'evaluation-candidate/:id', component: CandidateEvaluationComponent, canActivate: [AuthGuard, ] ,data: { roles: ['ADMIN','USER'] } },
  { path: '**', redirectTo: '' }
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HeaderComponent
  ],
  exports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withFetch()), // Configure o HttpClient para usar fetch
    AuthGuard,
    // outros serviços aqui
  ],
 
})
export class AppRoutingModule { }
