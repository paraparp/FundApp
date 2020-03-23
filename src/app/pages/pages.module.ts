import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';

import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ProductosComponent } from './productos/productos.component';
import { OperacionesComponent } from '../components/operaciones/operaciones.component';
import { TablaComponent } from '../components/tabla/tabla.component';
import { TablaProductosComponent } from '../components/tabla-productos/tabla-productos.component';



@NgModule({
  declarations: [
    WatchlistComponent,
    UserComponent,
    PagesComponent,
    ProductosComponent,
    OperacionesComponent,
    TablaComponent,
    TablaProductosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PAGES_ROUTES,
    SharedModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
