import { Component, OnInit } from '@angular/core';

import { DataSourceService } from 'src/app/dataSource/dataSource.service';
import { Cartera } from 'src/app/models/cartera.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']

})
export class ProductosComponent implements OnInit {

  constructor(public data: DataSourceService) { }

  ngOnInit(): void {
    this.cargarCartera()
  }


  cartera: Cartera;

  cargarCartera() {
    this.cartera = this.data.getCartera()[0];
  }

}
