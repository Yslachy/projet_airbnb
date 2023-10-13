import { TestBed } from '@angular/core/testing';

import { GetAccomodationsService } from './get-accomodations.service';

describe('GetAccomodationsService', () => {
  let service: GetAccomodationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccomodationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
