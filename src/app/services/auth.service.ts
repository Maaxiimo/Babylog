import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  UserCredential
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: any;
  constructor(private auth: Auth) {}

  // 🔐 Iniciar sesión
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // 🧾 Registrar usuario
  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // 💌 Recuperar contraseña
  resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  // 🚪 Cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
