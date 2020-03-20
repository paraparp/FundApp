import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';


@NgModule({

  imports: [
    RouterModule,
    CommonModule,
    MaterialModule

  ],
  declarations: [
    HeaderComponent,

  ],
  exports: [

    HeaderComponent,

  ]
})
export class SharedModule { }
