import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCrearComponent } from './docente-crear.component';

describe('DocenteCrearComponent', () => {
  let component: DocenteCrearComponent;
  let fixture: ComponentFixture<DocenteCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteCrearComponent]
    });
    fixture = TestBed.createComponent(DocenteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
