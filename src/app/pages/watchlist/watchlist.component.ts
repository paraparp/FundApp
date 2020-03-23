import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSourceService } from 'src/app/dataSource/dataSource.service';
import { Cartera } from 'src/app/models/cartera.model';
import { Operacion } from 'src/app/models/operacion.model';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {

  constructor(public data: DataSourceService) { }

  cartera: Cartera;
  operaciones: Operacion[] = [];

  isins: string[] = ["IE00B03HCZ61", "IE0007987690", "IE0031786142"];

  isin = 'IE00B03HCZ61';

  ngOnInit() {
    this.cargarCartera();
    this.cargarOperaciones();

  }

  cargarOperaciones() {

    this.operaciones = this.data.getOperacionesByIsin('IE00B03HCZ61');

  }
  cargarCartera() {

    this.cartera = this.data.getCartera()[0];

  }

}
