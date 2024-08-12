import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReuseStrategyCustome } from '../../customes/reusse-strategy.custome'

import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';

import { CursoEditComponent } from '../../components/curso/curso-edit/curso-edit.component';
import { CursoAddComponent } from '../../components/curso/curso-add/curso-add.component';
import { CursoListComponent } from '../../components/curso/curso-list/curso-list.component';
import { CursoInfoComponent } from '../../components/curso/curso-info/curso-info.component';

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
  { path: 'cursos', component: CursoListComponent,
    children: [
      { path: 'add', component: CursoAddComponent },
      { path: ':id', component: CursoEditComponent }
    ]  
  },
  { path: 'cursosadd', component: CursoAddComponent }
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
