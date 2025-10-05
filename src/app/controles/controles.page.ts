import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

interface Control {
  id: number;
  nombre: string;
  fecha: string;   // YYYY-MM-DD
  hora: string;    // HH:mm
  doctor: string;
  lugar: string;
  info: string;
}

@Component({
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ControlesPage {
  controles: Control[] = [];
  filtro: string = '';
  segmento: 'realizados' | 'proximos' = 'realizados';
  private idCounter = 1;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {}

  get controlesFiltrados(): Control[] {
    const ahora = new Date();
    return this.controles
      .filter(c => {
        const fechaControl = new Date(`${c.fecha}T${c.hora}`);
        return this.segmento === 'realizados'
          ? fechaControl < ahora
          : fechaControl >= ahora;
      })
      .filter(c =>
        c.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        c.doctor.toLowerCase().includes(this.filtro.toLowerCase()) ||
        c.lugar.toLowerCase().includes(this.filtro.toLowerCase()) ||
        c.info.toLowerCase().includes(this.filtro.toLowerCase())
      );
  }

  async agregarControl() {
    const alert = await this.alertCtrl.create({
      header: 'Agregar control',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre del control' },
        { name: 'fecha', type: 'date' },
        { name: 'hora', type: 'time' },
        { name: 'doctor', type: 'text', placeholder: 'Doctor' },
        { name: 'lugar', type: 'text', placeholder: 'Lugar o recinto' },
        { name: 'info', type: 'textarea', placeholder: 'Información adicional' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            const nuevo: Control = {
              id: this.idCounter++,
              nombre: data.nombre,
              fecha: data.fecha,
              hora: data.hora,
              doctor: data.doctor,
              lugar: data.lugar,
              info: data.info
            };
            this.controles.push(nuevo);
            this.programarRecordatorio(nuevo);
          }
        }
      ]
    });
    await alert.present();
  }

  async verControl(control: Control) {
    const alert = await this.alertCtrl.create({
      header: control.nombre,
      message: `
        📅 <b>Fecha:</b> ${control.fecha}<br>
        ⏰ <b>Hora:</b> ${control.hora}<br>
        👨‍⚕️ <b>Doctor:</b> ${control.doctor}<br>
        🏥 <b>Lugar:</b> ${control.lugar}<br>
        📝 <b>Info:</b> ${control.info}
      `,
      buttons: [
        {
          text: 'Editar',
          handler: () => this.editarControl(control)
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => this.eliminarControl(control.id)
        },
        'Cerrar'
      ]
    });
    await alert.present();
  }

  async editarControl(control: Control) {
    const alert = await this.alertCtrl.create({
      header: 'Editar control',
      inputs: [
        { name: 'nombre', type: 'text', value: control.nombre },
        { name: 'fecha', type: 'date', value: control.fecha },
        { name: 'hora', type: 'time', value: control.hora },
        { name: 'doctor', type: 'text', value: control.doctor },
        { name: 'lugar', type: 'text', value: control.lugar },
        { name: 'info', type: 'textarea', value: control.info }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            control.nombre = data.nombre;
            control.fecha = data.fecha;
            control.hora = data.hora;
            control.doctor = data.doctor;
            control.lugar = data.lugar;
            control.info = data.info;
            this.programarRecordatorio(control);
          }
        }
      ]
    });
    await alert.present();
  }

  eliminarControl(id: number) {
    this.controles = this.controles.filter(c => c.id !== id);
  }

  // 🔔 Simulación de recordatorio (1 día antes del control)
  private programarRecordatorio(control: Control) {
    const fechaControl = new Date(`${control.fecha}T${control.hora}`);
    const ahora = new Date();

    const diffMs = fechaControl.getTime() - ahora.getTime();
    const unDia = 24 * 60 * 60 * 1000;

    if (diffMs > unDia) {
      setTimeout(async () => {
        const toast = await this.toastCtrl.create({
          message: `⏰ Recordatorio: Mañana tienes el control "${control.nombre}" a las ${control.hora}`,
          duration: 4000,
          color: 'warning'
        });
        await toast.present();
      }, diffMs - unDia);
    }
  }
}
