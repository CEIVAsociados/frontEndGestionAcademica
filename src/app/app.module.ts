import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './modules/routing/routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorAcademicoComponent } from './Director-Academico/director-academico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

/*Menu Toolbar*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CursoAddComponent } from './components/curso/curso-add/curso-add.component';
import { CursoEditComponent } from './components/curso/curso-edit/curso-edit.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { NavComponent } from './components/nav/nav.component';
import { CursoInfoComponent } from './components/curso/curso-info/curso-info.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { AdminComponent } from './components/inicio/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorAcademicoComponent,
    LoginComponent,
    HomeComponent,
    CursoAddComponent,
    CursoEditComponent,
    CursoListComponent,
    NavComponent,
    CursoInfoComponent,
    NavAdminComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
