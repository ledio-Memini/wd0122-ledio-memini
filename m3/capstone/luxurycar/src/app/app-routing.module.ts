import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
, { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }
, { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'azienda', loadChildren: () => import('./azienda/azienda.module').then(m => m.AziendaModule) },
  { path: 'rolls', loadChildren: () => import('./rolls/rolls.module').then(m => m.RollsModule) },
  { path: 'bentley', loadChildren: () => import('./bentley/bentley.module').then(m => m.BentleyModule) },
  { path: 'maybach', loadChildren: () => import('./maybach/maybach.module').then(m => m.MaybachModule) },
  { path: 'mansory', loadChildren: () => import('./mansory/mansory.module').then(m => m.MansoryModule) },
  { path: 'lamborghini', loadChildren: () => import('./lamborghini/lamborghini.module').then(m => m.LamborghiniModule) },
  { path: 'ferrari', loadChildren: () => import('./ferrari/ferrari.module').then(m => m.FerrariModule) },
  { path: 'bugatti', loadChildren: () => import('./bugatti/bugatti.module').then(m => m.BugattiModule) },
  { path: 'porsche', loadChildren: () => import('./porsche/porsche.module').then(m => m.PorscheModule) },
  { path: 'maserati', loadChildren: () => import('./maserati/maserati.module').then(m => m.MaseratiModule) },


]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
