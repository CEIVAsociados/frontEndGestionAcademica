import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteListaComponent } from './estudiante-lista.component';

describe('EstudianteListaComponent', () => {
  let component: EstudianteListaComponent;
  let fixture: ComponentFixture<EstudianteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteListaComponent]
    });
    fixture = TestBed.createComponent(EstudianteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
