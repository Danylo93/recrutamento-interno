import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule
import { JobService } from './screens/job-list/job.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { AdminComponent } from './screens/admin/admin.component';
import { JobListComponent } from './screens/job-list/job-list.component';
import { AuthGuard } from './screens/admin/auth.guard';
import { ApplicationService } from './screens/job-apply/application.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthService } from './screens/admin/auth.service';
import { RoleGuard } from './screens/admin/role.guard';
import { HeaderComponent } from './components/header/header.component';
import { ApplyJobComponent } from './screens/job-apply/apply-job.component';
import { TokenInterceptor } from './screens/admin/auth.interceptor';

@NgModule({
  declarations: [
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    LoginComponent,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
],
  providers: [  JobService, ApplicationService ,  provideHttpClient(withFetch()),
    AuthGuard, AuthService, RoleGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]
})
export class AppModule {}
