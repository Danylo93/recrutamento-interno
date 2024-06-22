import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatePanelComponent } from './candidate-pane/candidate-pane.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './admin/auth.guard';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { RoleGuard } from './admin/role.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HeaderComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'jobs', component: JobListComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['USER', 'ADMIN'] }},
      { path: 'jobs/:id', component: JobDetailComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['USER', 'ADMIN'] } },
      { path: 'apply/:id', component: JobApplyComponent,canActivate: [AuthGuard, RoleGuard], data: { roles: ['USER', 'ADMIN'] } },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['ADMIN'] }},
      { path: 'candidate-panel', component: CandidatePanelComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['USER', 'ADMIN'] } },
      { path: 'access-denied', component: AccessDeniedComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  exports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CandidatePanelComponent,
    JobListComponent,
    JobDetailComponent,
    JobApplyComponent,
    HeaderComponent
  ],
  providers: [
    provideHttpClient(withFetch()), // Configure o HttpClient para usar fetch
    AuthGuard,
    // outros serviços aqui
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppRoutingModule { }
