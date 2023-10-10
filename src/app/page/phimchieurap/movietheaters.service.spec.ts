import { TestBed } from '@angular/core/testing';

import { MovietheatersService } from './movietheaters.service';

describe('MovietheatersService', () => {
  let service: MovietheatersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovietheatersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
