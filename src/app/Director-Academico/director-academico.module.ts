import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorRoutingModule } from '../Director-Academico/director-routing.module';

/*Menu Toolbar*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DirectorRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DirectorAcademicoModule { }
