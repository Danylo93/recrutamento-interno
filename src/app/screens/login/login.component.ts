import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../admin/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoginMode: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['USER', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      success => {
        if (success) {
          // Redirecionar conforme o papel do usuário
          const userRoles = this.authService.getUserRole();
          if (userRoles.includes('USER')) {
            this.router.navigate(['/candidate-panel']);
          } else if (userRoles.includes('ADMIN')) {
            this.router.navigate(['/admin']);
          } else {
            // Redirecionamento padrão para algum lugar genérico, caso não haja uma role específica
            this.router.navigate(['/']);
          }
        } else {
          this.errorMessage = 'Login Falhou';
        }
      },
      error => {
        console.error('Error during login:', error);
        this.errorMessage = 'Usuário ou Senha Inválidos.';
      }
    );
  }
  
  createUser() {
    if (this.registerForm.valid) {
      const { username, password, role } = this.registerForm.value;
      this.authService.createUser(username, password, role)
        .subscribe(
          success => {
            if (success) {
              this.errorMessage = 'Usuário Criado com sucesso, você já pode fazer login';
              this.isLoginMode = true;
            } else {
              this.errorMessage = 'Usuário já existe. Por favor escolha outro.';
            }
          },
          error => {
            this.errorMessage = 'Erro ao criar usuário, tente novamente.';
            console.error('Error creating user:', error);
          }
        );
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }
}
