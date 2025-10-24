import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // 👈 importa el guard

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 🔐 Rutas públicas
  { path: 'login', loadComponent: () => import('./log/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./log/register/register.page').then(m => m.RegisterPage) },
  { path: 'forgot-password', loadComponent: () => import('./log/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage) },

  // 🏠 Rutas protegidas
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage), canActivate: [authGuard] },
  { path: 'vacunas', loadComponent: () => import('./vacunas/vacunas.page').then(m => m.VacunasPage), canActivate: [authGuard] },
  { path: 'crecimiento', loadComponent: () => import('./crecimiento/crecimiento.page').then(m => m.CrecimientoPage), canActivate: [authGuard] },
  { path: 'alimentacion', loadComponent: () => import('./alimentacion/alimentacion.page').then(m => m.AlimentacionPage), canActivate: [authGuard] },
  { path: 'banos', loadComponent: () => import('./banos/banos.page').then(m => m.BanosPage), canActivate: [authGuard] },
  { path: 'controles', loadComponent: () => import('./controles/controles.page').then(m => m.ControlesPage), canActivate: [authGuard] },

  // Fallback
  { path: '**', redirectTo: 'login' },
];
