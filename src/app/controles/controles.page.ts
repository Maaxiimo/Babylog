import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonBadge, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-controles',
  standalone: true,
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonBadge],
})
export class ControlesPage {
  proximos = [
    {
      fecha: '25 de Noviembre 2025',
      tipo: 'Control general pediátrico',
      lugar: 'Centro Médico Familiar',
      estado: 'Pendiente',
    },
  ];

  anteriores = [
    {
      fecha: '15 de Septiembre 2025',
      tipo: 'Control de peso y talla',
      observaciones: 'Crecimiento dentro del rango normal.',
    },
    {
      fecha: '20 de Julio 2025',
      tipo: 'Vacunación y control nutricional',
      observaciones: 'Vacunas al día, peso ideal.',
    },
  ];
}
