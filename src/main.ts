// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

// 🧩 Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    provideAnimations(),

    // 🔥 Inicializa Firebase con las credenciales de tu proyecto
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // 👤 Habilita autenticación
    provideAuth(() => getAuth()),
  ],
}).catch(err => console.error(err));
