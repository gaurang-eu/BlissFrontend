import { TestBed } from '@angular/core/testing';

import { QueApiService } from './que-api.service';

describe('QueApiService', () => {
  let service: QueApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
