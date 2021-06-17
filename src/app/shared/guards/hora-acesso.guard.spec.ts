import { TestBed } from '@angular/core/testing';

import { HoraAcessoGuard } from './hora-acesso.guard';

describe('HoraAcessoGuard', () => {
  let guard: HoraAcessoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HoraAcessoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
