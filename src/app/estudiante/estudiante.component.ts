import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

import { EstudianteEntity } from '../entities/estudiante.entity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EstudianteService } from '../services/estudiante.service';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav;

  constructor(private observer: BreakpointObserver, private cd : ChangeDetectorRef,
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

  public salir(){
    this.router.navigate(['home']);
  }
  
}
