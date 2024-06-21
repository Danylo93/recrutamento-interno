import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ FormsModule, CommonModule ],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'user'; // Papel padrão para novo usuário
  errorMessage: string = '';
  isLoginMode: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getUserRole();
      if (role === 'user') {
        this.router.navigate(['/jobs']);
      } else if (role === 'admin') {
        this.router.navigate(['/admin']);
      }
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }

  createUser() {
    if (this.authService.createUser(this.username, this.password, this.role)) {
      this.errorMessage = 'Usuário criado com sucesso. Você pode fazer login agora.';
      this.isLoginMode = true;
    } else {
      this.errorMessage = 'Nome de usuário já existe. Tente outro.';
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }
}
