import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 🔐 Rutas públicas
  { path: 'login', loadComponent: () => import('./log/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./log/register/register.page').then(m => m.RegisterPage) },
  { path: 'forgot-password', loadComponent: () => import('./log/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage) },

  // 🏠 Rutas (modo mockup libre, sin protección)
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'vacunas', loadComponent: () => import('./vacunas/vacunas.page').then(m => m.VacunasPage) },
  { path: 'crecimiento', loadComponent: () => import('./crecimiento/crecimiento.page').then(m => m.CrecimientoPage) },
  { path: 'alimentacion', loadComponent: () => import('./alimentacion/alimentacion.page').then(m => m.AlimentacionPage) },
  { path: 'banos', loadComponent: () => import('./banos/banos.page').then(m => m.BanosPage) },
  { path: 'controles', loadComponent: () => import('./controles/controles.page').then(m => m.ControlesPage) },

  // Fallback
  { path: '**', redirectTo: 'login' },
];
