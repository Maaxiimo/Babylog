import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { VacunasPage } from './vacunas/vacunas.page';
import { CrecimientoPage } from './crecimiento/crecimiento.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'vacunas',
    component: VacunasPage,
  },
  {
    path: 'crecimiento',
    component: CrecimientoPage,
  },
  {
  path: 'alimentacion',
  loadComponent: () =>
    import('./alimentacion/alimentacion.page').then((m) => m.AlimentacionPage),
},
{
  path: 'banos',
  loadComponent: () =>
    import('./banos/banos.page').then((m) => m.BanosPage),
},
{
  path: 'controles',
    loadComponent: () =>
      import('./controles/controles.page').then((m) => m.ControlesPage), // 👈 Nuevo
  },
  

  
];
