import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons 
} from '@ionic/angular/standalone';

// 📊 Chart.js y ng2-charts
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-crecimiento',
  templateUrl: './crecimiento.page.html',
  styleUrls: ['./crecimiento.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule, // ✅ Para gráficos
    // ✅ Componentes de Ionic que usamos en el HTML
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
    IonButtons
  ]
})
export class CrecimientoPage {
  mostrarForm = false;

  nuevoRegistro = {
    peso: null as number | null,
    altura: null as number | null,
    mes: null as string | null
  };

  registroSeleccionado: { peso: number; altura: number; mes: string } | null = null;

  estadoCrecimiento: string = 'Dentro del rango ideal para su edad.';
  recomendaciones: string = 'Mantener una dieta balanceada con frutas, verduras y leche materna.';

  // 📊 Datos iniciales del gráfico
  lineChartData: ChartData<'line'> = {
    labels: ['Mes 1', 'Mes 2', 'Mes 3'],
    datasets: [
      {
        data: [50, 55, 60],
        label: 'Altura (cm)',
        borderColor: '#3880ff',
        backgroundColor: 'rgba(56,128,255,0.3)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const altura = this.lineChartData.datasets[0].data[index] as number;
        this.registroSeleccionado = {
          peso: 8 + index, // Simulación de peso
          altura,
          mes: `Mes ${index + 1}`
        };
      }
    }
  };

  lineChartType: 'line' = 'line';

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  agregarRegistro() {
    if (this.nuevoRegistro.altura && this.nuevoRegistro.peso) {
      if (!this.lineChartData.labels) {
        this.lineChartData.labels = [];
      }

      const mes = `Mes ${this.lineChartData.labels.length + 1}`;
      this.lineChartData.labels.push(mes);

      if (!this.lineChartData.datasets[0].data) {
        this.lineChartData.datasets[0].data = [];
      }

      (this.lineChartData.datasets[0].data as number[]).push(this.nuevoRegistro.altura);

      // Reset formulario
      this.nuevoRegistro = { peso: null, altura: null, mes: null };
      this.mostrarForm = false;
    }
  }
}
