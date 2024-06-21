import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatePanelComponent } from './candidate-pane/candidate-pane.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './admin/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'jobs', component: JobListComponent,canActivate: [AuthGuard] },
  { path: 'jobs/:id', component: JobDetailComponent, canActivate: [AuthGuard]},
  { path: 'apply/:id', component: JobApplyComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'candidate-panel', component: CandidatePanelComponent, canActivate: [AuthGuard] }
];
