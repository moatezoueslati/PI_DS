import { TestBed } from '@angular/core/testing';

import { DjangoservicesService } from './djangoservices.service';

describe('DjangoservicesService', () => {
  let service: DjangoservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangoservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
