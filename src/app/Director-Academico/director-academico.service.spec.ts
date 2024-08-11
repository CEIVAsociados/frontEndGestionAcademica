import { TestBed } from '@angular/core/testing';

import { DirectorAcademicoService } from './director-academico.service';

describe('DirectorAcademicoService', () => {
  let service: DirectorAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
