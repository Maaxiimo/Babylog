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
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
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
export class ControlesPage {
  control = {
    fecha: '',
    doctor: '',
    observaciones: ''
  };

  controles: any[] = [];

  agregarControl() {
    if (this.control.fecha && this.control.doctor) {
      this.controles.push({ ...this.control });
      this.control = { fecha: '', doctor: '', observaciones: '' };
    }
  }
}
