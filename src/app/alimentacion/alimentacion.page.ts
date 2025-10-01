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

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
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
    FormsModule
  ]
})
export class AlimentacionPage {
  registro = {
    fecha: '',
    comida: '',
    notas: ''
  };

  registros: any[] = [];

  agregarRegistro() {
    if (this.registro.fecha && this.registro.comida) {
      this.registros.push({ ...this.registro });
      this.registro = { fecha: '', comida: '', notas: '' };
    }
  }
}
