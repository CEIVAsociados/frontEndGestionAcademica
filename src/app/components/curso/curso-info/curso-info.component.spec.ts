import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInfoComponent } from './curso-info.component';

describe('CursoInfoComponent', () => {
  let component: CursoInfoComponent;
  let fixture: ComponentFixture<CursoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoInfoComponent]
    });
    fixture = TestBed.createComponent(CursoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
