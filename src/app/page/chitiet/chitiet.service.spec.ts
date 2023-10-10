import { TestBed } from '@angular/core/testing';

import { ChitietService } from './chitiet.service';

describe('ChitietService', () => {
  let service: ChitietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChitietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
