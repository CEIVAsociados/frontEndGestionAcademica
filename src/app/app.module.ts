/**Importaciones de Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**Importaciones de Angular Material */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';

/**Importaciones de bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './modules/routing/routing.module';
import { AppRoutingModule } from './app-routing.module';



/**Importaciones de componentes*/
import  { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CursoAddComponent } from './components/curso/curso-add/curso-add.component';
import { CursoEditComponent } from './components/curso/curso-edit/curso-edit.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { NavComponent } from './components/nav/nav.component';
import { CursoInfoComponent } from './components/curso/curso-info/curso-info.component';
import { AppComponent } from './app.component';
import { DirectorAcademicoComponent } from './Director-Academico/director-academico.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteCrearComponent } from './estudiante/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './estudiante/estudiante-editar/estudiante-editar.component';

/**Importaciones de material */
import { ReactiveFormsModule } from '@angular/forms';


import {MatFormFieldModule} from '@angular/material/form-field';
import { DocenteCrearComponent } from './docente/docente-crear/docente-crear.component';
import { DocenteEditarComponent } from './docente/docente-editar/docente-editar.component';
import { DocenteListarComponent } from './docente/docente-listar/docente-listar.component';
import { DocenteDetalleComponent } from './docente/docente-detalle/docente-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorAcademicoComponent,
    HomeComponent,
    CursoAddComponent,
    CursoEditComponent,
    CursoListComponent,
    NavComponent,
    CursoInfoComponent,
    LoginComponent,
    EstudianteComponent,
    EstudianteCrearComponent,
    EstudianteEditarComponent,
    DocenteCrearComponent,
    DocenteEditarComponent,
    DocenteListarComponent,
    DocenteDetalleComponent
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
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,

    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
