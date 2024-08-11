import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAcademicoComponent } from './director-academico.component';

describe('DirectorAcademicoComponent', () => {
  let component: DirectorAcademicoComponent;
  let fixture: ComponentFixture<DirectorAcademicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorAcademicoComponent]
    });
    fixture = TestBed.createComponent(DirectorAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
