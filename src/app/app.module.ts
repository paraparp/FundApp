import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataSourceService } from './dataSource/dataSource.service';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule
  ],
  providers: [DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
