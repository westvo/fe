import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: '**'},
  {
    path: 'hotels',
    loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'template-managements',
    loadChildren: () => import('./template-management/template-management.module').then(m => m.TemplateManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
