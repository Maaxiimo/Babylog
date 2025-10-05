import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-banos',
  templateUrl: './banos.page.html',
  styleUrls: ['./banos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BanosPage {
  banos: { id: number, dia: string, hora: string }[] = [];
  private contadorId = 1;

  constructor(private alertCtrl: AlertController) {}

  async agregarBano() {
    const alert = await this.alertCtrl.create({
      header: 'Agregar baño',
      inputs: [
        { name: 'dia', type: 'date', label: 'Día del baño' },
        { name: 'hora', type: 'time', label: 'Hora del baño' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.dia && data.hora) {
              this.banos.push({ id: this.contadorId++, dia: data.dia, hora: data.hora });

              // ⚡ Simulación de recordatorio
              this.programarRecordatorio(data.dia, data.hora);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async verBano(bano: any) {
    const alert = await this.alertCtrl.create({
      header: `Baño programado`,
      message: `📅 Día: ${bano.dia}<br>⏰ Hora: ${bano.hora}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => this.editarBano(bano)
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => this.eliminarBano(bano.id)
        },
        'Cerrar'
      ]
    });
    await alert.present();
  }

  async editarBano(bano: any) {
    const alert = await this.alertCtrl.create({
      header: 'Editar baño',
      inputs: [
        { name: 'dia', type: 'date', value: bano.dia },
        { name: 'hora', type: 'time', value: bano.hora }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            bano.dia = data.dia;
            bano.hora = data.hora;
          }
        }
      ]
    });
    await alert.present();
  }

  eliminarBano(id: number) {
    this.banos = this.banos.filter(b => b.id !== id);
  }

  private programarRecordatorio(dia: string, hora: string) {
    // ⚡ Simulación: convertimos fecha + hora en milisegundos
    const fechaHora = new Date(`${dia}T${hora}`);
    const ahora = new Date();

    const diferencia = fechaHora.getTime() - ahora.getTime() - (30 * 60 * 1000); // 30 min antes

    if (diferencia > 0) {
      setTimeout(() => {
        alert(`🔔 Recordatorio: en 30 minutos el bebé recibirá su baño (día ${dia} a las ${hora}).`);
      }, diferencia);
    }
  }
}
