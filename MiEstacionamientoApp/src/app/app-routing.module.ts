import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RestPasswordComponent } from './componentes/componente/rest-password/rest-password.component';
import { EstacionamientoComponent } from './componentes/componente/estacionamiento/estacionamiento.component';
import { map } from 'rxjs';
import { PageProtegidoGuard } from './guards/guard/pagina-protegida.guard';
const uidAdmin = 'ZxlP0Wvg7vOHdWxVGgJkw0rQ5Eu1';
const onlyAdmin = () => map((user:any) => !!user &&(user.udi === uidAdmin))

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [PageProtegidoGuard]
  },
  {path: 'upestacionamiento', component:EstacionamientoComponent},
 
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  //{path: 'reset-password',
  //component: RestPasswordComponent
  //},
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function canActivate(onlyAdmin: () => import("rxjs").OperatorFunction<any, boolean>): import("@angular/router").Route {
  throw new Error('Function not implemented.');
}

