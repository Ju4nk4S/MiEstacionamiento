import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { RestPasswordComponent } from 'src/app/componentes/componente/rest-password/rest-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup
  constructor(
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, 
    public authService:AuthService,
    public alertController: AlertController,
    public router: Router,
    public modalC:ModalController, 
    
  ) {}



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        
      email: ['', [
      Validators.required, 
      Validators.email,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
    ]],
      password: ['', [
      Validators.required,
      Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
    ]]
    
 })
}
get errorControl(){
  return this.loginForm?.controls;
}

async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.loginForm?.valid) {
      const user = await this.authService.loginUsuario(this.loginForm.value.email, this.loginForm.value.password).catch((error) => {
          console.log(error);
          loading.dismiss() 
      
      })
      if(user){
        loading.dismiss()
        this.router.navigate(['/home'])
      }else{
        console.log('provide correct vlues ');
      }
    } 
  }

  async rest(){
    const modal= await this.modalC.create({
      component:RestPasswordComponent,
      animated:true,
      mode:'md',
      backdropDismiss:false,
      cssClass:'restPassword'
    })
  }
}