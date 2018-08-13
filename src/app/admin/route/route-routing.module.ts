import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'restaurante', loadChildren: './../../restaurante/restaurante.module#RestauranteModule' },
    { path: 'prato', loadChildren: './../../prato/prato.module#PratoModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
