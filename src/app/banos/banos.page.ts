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
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banos',
  templateUrl: './banos.page.html',
  styleUrls: ['./banos.page.scss'],
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
    IonCard,
    IonCardContent,
    FormsModule,
    NgFor
  ]
})
export class BanosPage {
  registro = {
    fecha: '',
    hora: '',
    notas: ''
  };

  registros: any[] = [];

  agregarRegistro() {
    if (this.registro.fecha && this.registro.hora) {
      this.registros.push({ ...this.registro });
      console.log('Registro agregado:', this.registro); // Debug
      this.registro = { fecha: '', hora: '', notas: '' };
    }
  }
}
