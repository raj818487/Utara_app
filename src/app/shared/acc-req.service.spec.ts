import { TestBed } from '@angular/core/testing';

import { AccReqService } from './acc-req.service';

describe('AccReqService', () => {
  let service: AccReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
