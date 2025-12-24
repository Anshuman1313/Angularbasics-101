// src/app/pages/dashboard/dashboard.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Welcome, {{ authService.currentUser()?.name }}!</h1>
        <button (click)="authService.logout()" class="btn-logout">Logout</button>
      </div>
      <div class="user-info">
        <p><strong>Email:</strong> {{ authService.currentUser()?.email }}</p>
        <p><strong>Status:</strong> Logged In ✅</p>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .btn-logout {
      padding: 0.5rem 1rem;
      background: #e53e3e;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .user-info {
      background: #f7fafc;
      padding: 1.5rem;
      border-radius: 8px;
    }
  `]
})
export class DashboardComponent {
  authService = inject(Auth);
}
