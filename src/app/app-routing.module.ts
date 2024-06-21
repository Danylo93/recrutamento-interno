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
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './admin/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
 { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: JobApplyComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'candidate-panel', component: CandidatePanelComponent }
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
