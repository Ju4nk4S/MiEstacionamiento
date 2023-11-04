import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEstacionamientoPageRoutingModule } from './add-estacionamiento-routing.module';

import { AddEstacionamientoPage } from './add-estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddEstacionamientoPageRoutingModule
  ],
  declarations: [AddEstacionamientoPage]
})
export class AddEstacionamientoPageModule {}
