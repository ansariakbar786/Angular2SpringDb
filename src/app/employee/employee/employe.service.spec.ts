import { TestBed, inject } from '@angular/core/testing';

import { EmployeService } from './employe.service';

describe('EmployeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeService]
    });
  });

  it('should be created', inject([EmployeService], (service: EmployeService) => {
    expect(service).toBeTruthy();
  }));
});
