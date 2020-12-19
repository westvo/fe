import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'sadmin',
    loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
