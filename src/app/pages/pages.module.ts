import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../shared/material.module';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WatchlistComponent,
    UserComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PAGES_ROUTES,
    SharedModule
  ],
  exports: []
})
export class PagesModule { }
