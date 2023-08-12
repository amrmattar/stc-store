import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly USERS = {
    user: 'user',
    admin: 'admin'
  };

  private static readonly USER_ROLES = {
    user: 'user',
    admin: 'admin'
  };

  login(credintals: any): boolean {
    const username = credintals.userName
    const password = credintals.password
    const user = AuthService.USERS[username];
    if (user && user === password) {
      sessionStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  getUserRole(username: string): string | null {
    return AuthService.USER_ROLES[username] || null;
  }

  logout(): void {
    sessionStorage.removeItem('user');
  }

  getUser(): string | null {
    return sessionStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
