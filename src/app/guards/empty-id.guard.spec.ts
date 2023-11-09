import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { emptyIdGuard } from './empty-id.guard';

describe('emptyIdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => emptyIdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
