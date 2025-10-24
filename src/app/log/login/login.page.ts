import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { IonContent, IonCard, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonCard, IonCardContent, IonItem, IonInput, IonButton],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private router: Router) {}

  async login() {
    if (!this.email || !this.password) {
      (await this.toastCtrl.create({
        message: 'Por favor ingresa tus credenciales',
        duration: 2000,
        color: 'warning',
      })).present();
      return;
    }

    if (this.email === 'demo@babylog.com' && this.password === '123456') {
      this.navCtrl.navigateRoot('/home'); // asegúrate que "home" existe
    } else {
      (await this.toastCtrl.create({
        message: 'Correo o contraseña incorrectos',
        duration: 2000,
        color: 'danger',
      })).present();
    }
  }

  goToRegister() {
  this.router.navigateByUrl('/register');
}

  goToForgotPassword() {
  this.router.navigateByUrl('/forgot-password');
}
}