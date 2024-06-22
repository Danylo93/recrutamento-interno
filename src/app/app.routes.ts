import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './admin/auth.guard';
import { CandidatePanelComponent } from './candidate-panel/candidate-panel.component';
import { CandidateEvaluationComponent } from './evaluation-candidate/candidate-evaluation.component';
import { ApplyJobComponent } from './job-apply/apply-job.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'jobs', component: JobListComponent,canActivate: [AuthGuard] },
  { path: 'jobs/:id', component: JobDetailComponent, canActivate: [AuthGuard]},
  { path: 'apply', component: ApplyJobComponent, canActivate: [AuthGuard] },
  { path: 'apply/:id', component: ApplyJobComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'candidate-panel', component: CandidatePanelComponent, canActivate: [AuthGuard] },
  { path: 'evaluation-candidate', component: CandidateEvaluationComponent },
  { path: 'evaluation-candidate/:id', component: CandidateEvaluationComponent },

];
