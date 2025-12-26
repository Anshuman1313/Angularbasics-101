// src/app/pages/dashboard/dashboard.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { catchError, finalize, Observable, of } from 'rxjs';
import { Data, User } from '../../services/data';

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
    <div *ngIf="users$ | async as users; else loading">
      <ul>
        <li *ngFor="let user of users">{{ user.name }} - {{ user.id }}</li>
      </ul>
    </div>
    <ng-template #loading><p>Loading...</p></ng-template>
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
    users$ = of<User[]>([]);
  loading = true;
  error: string | null = null;

  constructor(private dataService: Data) {
    this.users$ = this.dataService.getUsers().pipe(
      catchError(() => {
        this.error = 'Failed to load users';
        return of([]);
      }),
      finalize(() => this.loading = false)
    );
  }
}
