import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export interface User {
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  private currentUserSignal = signal<User | null>(null);
  public currentUser = this.currentUserSignal.asReadonly();

  constructor(private router: Router) {
    // ✅ Only access localStorage in browser
    if (this.isBrowser) {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        this.currentUserSignal.set(JSON.parse(savedUser));
      }
    }
  }

  login(email: string, password: string): { success: boolean; message: string } {
    console.log('🔐 Login attempt:', { email, password });
    
    if (email === 'test@example.com' && password === 'password123') {
      const user: User = { email, name: 'Test User' };
 this.currentUserSignal.set(user);
      
      // ✅ Only use localStorage in browser
      if (this.isBrowser) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      
      console.log('✅ Login successful:', user);
      return { success: true, message: 'Login successful' };
    }
    
    console.log(' Login failed: Invalid credentials');
    return { success: false, message: 'Invalid email or password' };
  }

  logout(): void {
    console.log('🚪 User logged out');
    this.currentUserSignal.set(null);
    
    // ✅ Only use localStorage in browser's
    if (this.isBrowser) {
      localStorage.removeItem('currentUser');
    }
    
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}


