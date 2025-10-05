import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonModal
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonModal
  ],
})
export class VacunasPage {
  segment: string = 'historial';

  vacunasHistorial: any[] = [
    { nombre: 'COVID-19', fecha: '2024-05-10', dosis: '1ra dosis' },
    { nombre: 'Influenza', fecha: '2024-06-15', dosis: 'Única dosis' }
  ];

  vacunasProximas: any[] = [
    { nombre: 'COVID-19', fecha: '2024-12-10', dosis: '2da dosis', info: 'Refuerzo obligatorio' },
    { nombre: 'Triple Viral', fecha: '2025-02-01', dosis: 'Única', info: 'Previene sarampión, rubéola y paperas' }
  ];

  vacunasFiltradas = [...this.vacunasHistorial];
  buscar = '';

  mostrarAgregar = false;
  mostrarDetalle = false;
  vacunaSeleccionada: any = null;

  vacuna = {
    nombre: '',
    fecha: '',
    dosis: '',
    info: ''
  };

  segmentChanged(event: any) {
    this.segment = event.detail.value;
  }

  buscarVacuna() {
    const texto = this.buscar.toLowerCase();
    this.vacunasFiltradas = this.vacunasHistorial.filter(v =>
      v.nombre.toLowerCase().includes(texto)
    );
  }

  abrirDetalle(vacuna: any) {
    this.vacunaSeleccionada = vacuna;
    this.mostrarDetalle = true;
  }

  guardarVacuna() {
    this.vacunasHistorial.push({ ...this.vacuna });
    this.vacunasFiltradas = [...this.vacunasHistorial];
    this.vacuna = { nombre: '', fecha: '', dosis: '', info: '' };
    this.mostrarAgregar = false;
  }

  eliminarVacuna(vacuna: any) {
    this.vacunasProximas = this.vacunasProximas.filter(v => v !== vacuna);
    this.mostrarDetalle = false;
  }

  editarVacuna() {
    this.mostrarDetalle = false;
    this.mostrarAgregar = true;
    this.vacuna = { ...this.vacunaSeleccionada };
  }
}
