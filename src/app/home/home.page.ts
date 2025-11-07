import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol],
})
export class HomePage {
  babyName = 'Martina';

  constructor(private router: Router) {}

  goToVacunas() {
    this.router.navigateByUrl('/vacunas');
  }

  goToControles() {
    this.router.navigateByUrl('/controles');
  }
}
