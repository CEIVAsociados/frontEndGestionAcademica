import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteEditarComponent } from './docente-editar.component';

describe('DocenteEditarComponent', () => {
  let component: DocenteEditarComponent;
  let fixture: ComponentFixture<DocenteEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteEditarComponent]
    });
    fixture = TestBed.createComponent(DocenteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
