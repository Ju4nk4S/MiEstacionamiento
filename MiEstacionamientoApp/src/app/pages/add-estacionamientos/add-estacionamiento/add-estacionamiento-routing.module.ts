import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEstacionamientoPage } from './add-estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: AddEstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEstacionamientoPageRoutingModule {}
