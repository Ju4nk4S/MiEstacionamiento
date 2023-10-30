import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationExtras,  Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email:any
  modelCon: any;
  alerContr: any;
  constructor(
    public alertController: AlertController, 
    public route: Router,
    public modal:ModalController,
    public authService: AuthService
    ) { }
 
  resetPassword(email: string) {
    this.authService.resetPassword(email)
      .then(() => {
        console.log('Correo de recuperación de contraseña enviado con éxito');
        this.alertaExito();
        this.modelCon.dismiss()
        
      })
      .catch((error) => {
        console.error('Error al enviar el correo de recuperación de contraseña', error);
        this.alertaError();

      });
  }

  ngOnInit() {}
//alertas

  async alertaExito(){
    const alerta = await this.alerContr.create({
      header:'Correo enviado con Exito',
      message:'Ingresa a tu correo para recuperar cuenta',
      buttons: ['OK'],

    });
    await alerta.present();

  } ;

  async alertaError(){
    const alert = await this.alerContr.create({
      header:'El correo Ingresado no es valido',
      message: 'Verifica que hallas ingresado un correo valido.'

    });
  }
  // FIn alertas



  

 async cerrar(){
   await this.modelCon.dismiss()
  
    
  }
}