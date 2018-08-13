import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteComponent } from './restaurante.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';

const routes: Routes = [
  
  { path: '', component: RestauranteListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
