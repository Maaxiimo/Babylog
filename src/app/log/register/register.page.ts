import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, ToastController, IonicModule } from '@ionic/angular';

// Ionic standalone components
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonicModule
],
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async register() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.showToast('Por favor completa todos los campos', 'warning');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden', 'danger');
      return;
    }

    // Simulación de registro exitoso
    this.showToast('Cuenta creada exitosamente', 'success');
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
