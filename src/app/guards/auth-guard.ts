import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
   const authService = inject(Auth);
  const router = inject(Router);

  console.log('Auth Guard - Checking authentication...');
  console.log('Is logged in:', authService.isLoggedIn());

  if (authService.isLoggedIn()) {
    console.log('Access granted');
    return true;
  }

  console.log('Access denied - Redirecting to login');
  return router.createUrlTree(['/login']);
};
