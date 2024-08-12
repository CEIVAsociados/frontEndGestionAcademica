import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './modules/routing/routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorAcademicoComponent } from './Director-Academico/director-academico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*Menu Toolbar*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorAcademicoComponent,
    LoginComponent,
    HomeComponent
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
    MatDividerModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
