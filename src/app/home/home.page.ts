import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle,
  IonButton
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { NavController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonicModule
],
})
export class HomePage {
  userEmail: string | null = null;

  constructor(private auth: AuthService, private navCtrl: NavController) {}

  ionViewWillEnter() {
    // Mostrar el correo del usuario autenticado
    this.userEmail = this.auth.user?.email ?? null;
  }

  async logout() {
    await this.auth.logout();
    this.navCtrl.navigateRoot('/login');
  }
}
