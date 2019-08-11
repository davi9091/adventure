import { TestBed } from '@angular/core/testing';

import { AbstractDataProviderService } from './abstract-data-provider.service';

describe('AbstractDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractDataProviderService = TestBed.get(AbstractDataProviderService);
    expect(service).toBeTruthy();
  });
});
