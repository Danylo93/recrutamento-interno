// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = '';
  private users: { [key: string]: { password: string, role: string } } = {
    'user': { password: 'user', role: 'user' },
    'admin': { password: 'admin', role: 'admin' }
  };

  login(username: string, password: string): boolean {
    const user = this.users[username];
    if (user && user.password === password) {
      this.isAuthenticated = true;
      this.userRole = user.role;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }

  createUser(username: string, password: string, role: string): boolean {
    if (!this.users[username]) {
      this.users[username] = { password, role };
      return true;
    }
    return false;
  }
}
