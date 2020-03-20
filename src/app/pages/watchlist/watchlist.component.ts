import { Component, OnInit } from '@angular/core';
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

  displayedColumns = ['producto', 'participaciones', 'precio', 'importe', 'plataforma', 'fechaAdquisicion'];


  cartera: Cartera;
  operaciones: Operacion[] = [];;



  ngOnInit() {
    this.cargarCartera();
    this.cargarOperaciones();

  }

  cargarOperaciones() {

    this.operaciones = this.data.getOperaciones();
    console.log(this.operaciones)
  }
  cargarCartera() {

    this.cartera = this.data.getCartera();
    console.log(this.cartera)
  }

}
