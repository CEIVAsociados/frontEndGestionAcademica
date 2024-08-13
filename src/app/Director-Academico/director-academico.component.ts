import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-academico',
  templateUrl: './director-academico.component.html',
  styleUrls: ['./director-academico.component.css']
})
export class DirectorAcademicoComponent {
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cd : ChangeDetectorRef,
    private router: Router){

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((resp:any) => {
      if(resp.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
    this.cd.detectChanges();
  }

  public cursos(){
    this.router.navigate(['cursos']);
  }
  public profesores(){
    this.router.navigate(['docentes']);
  }
  public estudiantes(){
    this.router.navigate(['estudiantes']);
  }
  public salir(){
    this.router.navigate(['home']);
  }
}
