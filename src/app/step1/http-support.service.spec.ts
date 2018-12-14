import { TestBed } from '@angular/core/testing';

import { HttpSupportService } from './http-support.service';

describe('HttpSupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSupportService = TestBed.get(HttpSupportService);
    expect(service).toBeTruthy();
  });
});
