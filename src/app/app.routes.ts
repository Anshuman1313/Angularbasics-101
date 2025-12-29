import { Routes } from '@angular/router';
import { Arrayfn, User2 } from './app';
import { Login } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { Home } from './pages/home/home';

export const routes: Routes = [
  //    {
  //   path: '',
  //   title: 'User 2 Page',
  //   component: User2,
  // }
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    // canActivate: [authGuard]
  },
  { 
    path: 'user', 
    component: User2,
  },
  { 
    path: 'home', 
    component: Home,
  },
  { path: '**', redirectTo: '/login' }
];
