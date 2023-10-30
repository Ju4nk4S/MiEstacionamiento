import { TestBed } from '@angular/core/testing';

import { DataParckingService } from './data-parcking.service';

describe('DataParckingService', () => {
  let service: DataParckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataParckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
