// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule
import { JobService } from './job.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { CandidatePanelComponent } from './candidate-pane/candidate-pane.component';

import { ApplicationService } from './application.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './admin/auth.guard';

@NgModule({
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
  imports: [
    BrowserModule,
    FormsModule, // Importe FormsModule aqui para suportar ngModel
    ReactiveFormsModule, // Importe ReactiveFormsModule aqui para suportar formGroup
    RouterModule,
    AppRoutingModule,
    HttpClient,
    HeaderComponent
  ],
  providers: [  JobService, ApplicationService ,  provideHttpClient(withFetch()),
    AuthGuard],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
