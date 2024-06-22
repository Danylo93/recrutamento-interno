import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = '';
  private apiUrl = 'http://localhost:8081/api/auth'; // Base URL dos endpoints de autenticação

  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            const decodedToken = this.getDecodedToken(response.token);
            if (decodedToken) {
              this.isAuthenticated = true;
              this.userRole = decodedToken.role; // Verifique se 'role' é o nome correto do claim no seu token
              localStorage.setItem('token', response.token);
              this.redirectUser(); // Redirecionar após o login
              return true;
            }
          }
          return false;
        })
      );
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
    localStorage.removeItem('token');
    this.router.navigate(['/']); // Redirecionar para a página inicial após o logout
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    console.log('User Role:', this.userRole);
    return this.userRole;
  }

  createUser(username: string, password: string, role: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password, role })
      .pipe(
        map(response => {
          return response && response.username;
        })
      );
  }

  

  private getDecodedToken(token: string): any {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        console.error('Error decoding token:', e);
        return null;
    }
}

  private redirectUser(): void {
    if (this.userRole === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/candidate-panel']);
    }
  }

  fetchUserRole(): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/roles`).pipe(
        map(response => {
            const roles = response.role; // Verifique a estrutura da resposta para obter as roles corretamente
            this.userRole = roles.includes('ADMIN') ? 'ADMIN' : 'USER';
            return this.userRole;
        })
    );
}

}
