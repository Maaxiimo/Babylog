import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';


import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
  ],
})
export class ForgotPasswordPage {
  email = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async recoverPassword() {
    if (!this.email) {
      this.showToast('Por favor ingresa tu correo electrónico', 'warning');
      return;
    }

    this.showToast('Se ha enviado un enlace de recuperación a tu correo', 'success');
    this.navCtrl.navigateBack('/login');
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }
}
