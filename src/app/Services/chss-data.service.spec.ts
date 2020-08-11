import { TestBed } from '@angular/core/testing';

import { ChssDataService } from './chss-data.service';

describe('ChssDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChssDataService = TestBed.get(ChssDataService);
    expect(service).toBeTruthy();
  });
});
