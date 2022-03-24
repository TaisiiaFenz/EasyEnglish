import { TestBed } from '@angular/core/testing';

import { FreshmanTestService } from './freshman-test.service';

describe('FreshmanTestService', () => {
  let service: FreshmanTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshmanTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
