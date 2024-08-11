import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteDetalleComponent } from './estudiante-detalle.component';

describe('EstudianteDetalleComponent', () => {
  let component: EstudianteDetalleComponent;
  let fixture: ComponentFixture<EstudianteDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteDetalleComponent]
    });
    fixture = TestBed.createComponent(EstudianteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
