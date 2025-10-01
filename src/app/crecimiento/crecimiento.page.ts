import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crecimiento',
  templateUrl: './crecimiento.page.html',
  styleUrls: ['./crecimiento.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonListHeader,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
    CommonModule
  ]
})
export class CrecimientoPage {
  registro = {
    fecha: '',
    peso: '',
    talla: ''
  };

  registros: any[] = [];

  guardarRegistro() {
    if (this.registro.fecha && this.registro.peso && this.registro.talla) {
      this.registros.push({ ...this.registro });
      this.registro = { fecha: '', peso: '', talla: '' };
    }
  }
}
