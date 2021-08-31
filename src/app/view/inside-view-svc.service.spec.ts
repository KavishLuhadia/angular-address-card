import { TestBed } from '@angular/core/testing';

import { InsideViewSvcService } from './inside-view-svc.service';

describe('InsideViewSvcService', () => {
  let service: InsideViewSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsideViewSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
