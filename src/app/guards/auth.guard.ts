import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

    if (authService.isLoggedIn()) {
      const user = authService.getUser();
      if (user === 'user' && state.url==='/user-dashboard') {
        return true
      } else if (user === 'admin' && state.url==='/admin-dashboard') {
        return true
      }
    } else {
      router.navigate(['login']);
      return false;
    }
};
