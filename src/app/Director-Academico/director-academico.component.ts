import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-director-academico',
  templateUrl: './director-academico.component.html',
  styleUrls: ['./director-academico.component.css']
})
export class DirectorAcademicoComponent {
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav;

  constructor(private observer: BreakpointObserver, private cd : ChangeDetectorRef){

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
}
