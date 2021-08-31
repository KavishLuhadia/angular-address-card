import { TestBed } from '@angular/core/testing';

import { ToVerifySvcService } from './to-verify-svc.service';

describe('ToVerifySvcService', () => {
  let service: ToVerifySvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToVerifySvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
