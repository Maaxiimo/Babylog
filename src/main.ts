import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';   // ✅ usar módulo en lugar de provideCharts

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(FormsModule, CommonModule, NgChartsModule) // ✅ aquí metemos NgChartsModule
  ],
});
