import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteListarComponent } from './docente-listar.component';

describe('DocenteListarComponent', () => {
  let component: DocenteListarComponent;
  let fixture: ComponentFixture<DocenteListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteListarComponent]
    });
    fixture = TestBed.createComponent(DocenteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
