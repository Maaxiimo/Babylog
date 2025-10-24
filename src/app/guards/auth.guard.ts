import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

// 🔒 Guard que verifica si el usuario está autenticado
export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // Usuario autenticado ✅
      } else {
        router.navigateByUrl('/login');
        resolve(false); // Usuario no autenticado 🚫
      }
    });
  });
};
