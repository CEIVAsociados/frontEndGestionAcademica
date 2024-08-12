import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReuseStrategyCustome } from '../../customes/reusse-strategy.custome'

import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
/*import { MenuComponent } from 'src/app/components/menu/menu.component';
import { PersonListComponent } from 'src/app/components/person/person-list/person-list.component';
import { PersonAddComponent } from 'src/app/components/person/person-add/person-add.component';
import { PersonEditComponent } from 'src/app/components/person/person-edit/person-edit.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
*/
const routes:Routes=[
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: ReuseStrategyCustome}
  ]
})
export class RoutingModule { }
