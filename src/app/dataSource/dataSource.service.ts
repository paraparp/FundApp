import { Producto } from '../models/producto.model';
import { Usuario } from '../models/usuario.model';
import { Cartera } from '../models/cartera.model';
import { Operacion } from '../models/operacion.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  producto1 = new Producto('1', 'IE00B03HCZ61', 'VANGLVI:ID', 'Vanguard Global Stock Index Fund', 'https://www.bloomberg.com/quote/VANGLVI:ID');
  producto2 = new Producto('2', 'IE0007987690', 'VANEIEI:ID', 'Vanguard European Stock Index Fund', 'https://www.bloomberg.com/quote/VANEIEI:ID');
  producto3 = new Producto('3', 'IE0031786142', 'VANEMSI:ID', 'Vanguard Emerging Markets Stock Index Fund', 'https://www.bloomberg.com/quote/VANEMSI:ID');

  usuario1 = new Usuario('1', 'dobarquerio');

  cartera1 = new Cartera('1', 'Mis fondos indexados', this.usuario1, new Date())

  operacion1 = new Operacion('1', this.producto1, 42.920, 23.2943, 'EUR', 'MyInvestor', this.cartera1, new Date('2020-03-13'));
  operacion2 = new Operacion('2', this.producto1, 49.080, 20.3736, 'EUR', 'MyInvestor', this.cartera1, new Date('2020-03-17'));
  operacion3 = new Operacion('3', this.producto1, 46.450, 21.5280, 'EUR', 'MyInvestor', this.cartera1, new Date('2020-03-18'));
  operacion4 = new Operacion('4', this.producto2, 5.163, 145.2390, 'EUR', 'MyInvestor', this.cartera1, new Date('2020-03-13'));
  operacion5 = new Operacion('5', this.producto3, 7.300, 136.9574, 'EUR', 'MyInvestor', this.cartera1, new Date('2020-03-13'));

  constructor() {
  }

  getProductos() {
    return [this.producto1, this.producto2, this.producto3]
  }

  getUsuarios() {
    return [this.usuario1]
  }

  getCartera() {
    return this.cartera1;
  }

  getOperaciones() {
    return [this.operacion1, this.operacion2, this.operacion3, this.operacion4, this.operacion5]
  }

}
