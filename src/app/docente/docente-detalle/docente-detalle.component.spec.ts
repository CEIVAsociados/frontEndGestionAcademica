import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDetalleComponent } from './docente-detalle.component';

describe('DocenteDetalleComponent', () => {
  let component: DocenteDetalleComponent;
  let fixture: ComponentFixture<DocenteDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteDetalleComponent]
    });
    fixture = TestBed.createComponent(DocenteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
