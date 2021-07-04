import { TestBed } from '@angular/core/testing';

import { InternetCheckService } from './internet-check.service';

describe('InternetCheckService', () => {
  let service: InternetCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternetCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
