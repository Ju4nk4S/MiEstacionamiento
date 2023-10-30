import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EstacionamientoComponent } from './componentes/componente/estacionamiento/estacionamiento.component';





@NgModule({
  declarations: [AppComponent, EstacionamientoComponent],
  imports: [BrowserModule, IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"miapp-e05c5","appId":"1:253208177981:web:4f0acbfaf4bbabeb6ce954","storageBucket":"miapp-e05c5.appspot.com","apiKey":"AIzaSyD6tzEwOty8g59pTpxVyWlIjNxEZAoWzDs","authDomain":"miapp-e05c5.firebaseapp.com","messagingSenderId":"253208177981","measurementId":"G-PK88BWLBYV"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
