import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonButtons
  ]
})
export class AlimentacionPage {
  mostrarFormAlimento = false;
  mostrarFormComida = false;

  nuevoAlimento = { nombre: '', calorias: null, proteinas: null, azucares: null };
  nuevaComida = { nombre: '', descripcion: '', calorias: null, proteinas: null };

  alimentos: any[] = [
    { nombre: 'Manzana', calorias: 52, proteinas: 0.3, azucares: 10 },
    { nombre: 'Yogurt', calorias: 59, proteinas: 10, azucares: 12 }
  ];

  comidas: any[] = [
    { nombre: 'Almuerzo', descripcion: 'Arroz con pollo y ensalada', calorias: 450, proteinas: 25 }
  ];

  toggleForm(tipo: 'alimento' | 'comida') {
    if (tipo === 'alimento') {
      this.mostrarFormAlimento = !this.mostrarFormAlimento;
      this.mostrarFormComida = false;
    } else {
      this.mostrarFormComida = !this.mostrarFormComida;
      this.mostrarFormAlimento = false;
    }
  }

  agregarAlimento() {
    if (this.nuevoAlimento.nombre) {
      this.alimentos.push({ ...this.nuevoAlimento });
      this.nuevoAlimento = { nombre: '', calorias: null, proteinas: null, azucares: null };
      this.mostrarFormAlimento = false;
    }
  }

  agregarComida() {
    if (this.nuevaComida.nombre) {
      this.comidas.push({ ...this.nuevaComida });
      this.nuevaComida = { nombre: '', descripcion: '', calorias: null, proteinas: null };
      this.mostrarFormComida = false;
    }
  }
}
