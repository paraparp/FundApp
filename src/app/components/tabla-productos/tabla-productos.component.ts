import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/dataSource/dataSource.service';
import { Cartera } from 'src/app/models/cartera.model';
import { Operacion } from 'src/app/models/operacion.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';
import { ImportXMLService } from 'src/app/services/import-xml.service';



@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']


})
export class TablaProductosComponent implements OnInit {

  //  @Input() public isin: string = '';

  constructor(
    public data: DataSourceService,
    public productoService: ProductosService,
    public importxml: ImportXMLService
  ) { }

  displayedColumns = ['nombre', 'isin', 'codigoBl', 'participaciones', 'precio', 'precioActual', 'valor'];

  productos: Producto[] = [];
  cartera: Cartera;
  operaciones: Operacion[] = [];
  valorSpan: string;


  ngOnInit() {
    this.cargarCartera();
    this.cargarProductos();
    //  this.importxml.extraerPrecio(this.cargarProductos()[3], 'precioActual')

  }



  cargarProductos() {
    return this.productos = this.data.getProductos();
  }


  cargarCartera() {
    return this.cartera = this.data.getCartera()[0];

  }

  getPrecioMedio(prod: Producto) {

    return this.productoService.precioMedioProductoEnCartera(prod.isin, '1');
  }

  getVolumen(prod: Producto) {
    return this.productoService.participacionesPorProducto(prod.isin, '1');


  }

  /** Gets the total cost of all transactions. */
  getTotalVol() {
    return this.operaciones.map(p => p.participaciones).reduce((acc, value) => acc + value, 0);
  }

  getTotalCost() {
    return this.operaciones.map(p => p.getImporte()).reduce((acc, value) => acc + value, 0);
  }

  getTotalValorProducto(prod: Producto) {
    return this.productoService.getValorTotalProducto(prod.isin, '1');
  }

  getTotalValorCartera() {
    return this.productoService.getTotalValorCartera('1');
  }

}
