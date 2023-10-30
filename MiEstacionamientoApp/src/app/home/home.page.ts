import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any
  mensaje: string= "";

  nombres : string = "";
  router: any;  
  estacionamiento: any;
  constructor(public rutaActiva: ActivatedRoute,public alertController: AlertController,
    public authService: AuthService,
    public route: Router ) { 
    this.user = authService.perfil()

 }
 ngOnInit() {
  this.nombres = history.state.nombre;
}
async logout(){
  this.authService.signOut().then(()=> {
    this.route.navigate(['/login'])
  }).catch ((error)=>{
    console.log(error);
  })
}
}