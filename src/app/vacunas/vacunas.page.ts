import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonInput, IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,   // 👈 NECESARIO para *ngIf y *ngFor
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput, IonButton
  ]
})
export class VacunasPage {
  vacuna = {
    nombre: '',
    fecha: '',
    notas: '',
    dosis: ''
  };

  vacunas: any[] = [];

  agregarVacuna() {
    if (this.vacuna.nombre && this.vacuna.fecha) {
      this.vacunas.push({ ...this.vacuna });
      this.vacuna = { nombre: '', fecha: '', notas: '', dosis: '' };
    }
  }
}
