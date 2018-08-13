import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../admin/Model/restaurante';
import { AppService } from '../../admin/services/app-services.service';
import { MicroservicesAddress } from '../../admin/services/microservices';


@Component({
  selector: 'app-list-restaurante',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {
  restauranteList: Restaurante[];
  displayedColumns: string[];
  dataSource;
  nome;
  constructor(private _appService: AppService, private _microservice: MicroservicesAddress) {
    this.displayedColumns = ['Nome', 'Editar', 'Excluir'];
    _appService.get(_microservice.restauranteApi).subscribe(x => {
      this.restauranteList = x
    });
    this.dataSource = this.restauranteList;
    
  }

  ngOnInit() {
  }
  eventClickEdit(id, nome) {
    this._appService.put(this._microservice.restauranteApi, {id, nome}).subscribe(x => {
      
    })
  }
  eventClickDelete(id) {

  }
  eventClickSearch() {

  }
  eventClickNew() {

  }
}
