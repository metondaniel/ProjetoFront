
import { NgModule } from '@angular/core';
import { RestauranteRoutingModule } from './restaurante.module.route';
import { RestauranteComponent } from './../restaurante/restaurante.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestauranteComponent,
    RestauranteListComponent
  ],
  imports: [
    RestauranteRoutingModule,
    FormsModule
    ],
  exports: [RestauranteRoutingModule],
})
export class RestauranteModule { }
