import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule
import { JobService } from './job.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AuthGuard } from './admin/auth.guard';
import { ApplicationService } from './application.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthService } from './auth.service';
import { RoleGuard } from './admin/role.guard';
import { CandidatePanelComponent } from './candidate-panel/candidate-panel.component';
import { HeaderComponent } from './header/header.component';
import { ApplyJobComponent } from './job-apply/apply-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    JobDetailComponent,
    AdminComponent,
    CandidatePanelComponent,
    AccessDeniedComponent,
    AdminComponent, 
    ApplyJobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importe FormsModule aqui para suportar ngModel
    ReactiveFormsModule, // Importe ReactiveFormsModule aqui para suportar formGroup
    RouterModule,
    LoginComponent,
    AppRoutingModule,
    HttpClient,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
],
  providers: [  JobService, ApplicationService ,  provideHttpClient(withFetch()),
    AuthGuard, AuthService, RoleGuard],
  bootstrap: [AppComponent,HeaderComponent, LoginComponent ]
})
export class AppModule {}
