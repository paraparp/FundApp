import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { DataSourceService } from './dataSource/dataSource.service';

import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';


// importar locales
import localePy from '@angular/common/locales/es-PY';

import { registerLocaleData } from '@angular/common';

import { ServiceModule } from './services/service.module';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'fr');



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    ServiceModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    DataSourceService,
  ],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { }
