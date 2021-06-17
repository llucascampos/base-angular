import { TestBed } from '@angular/core/testing';

import { PerfilInterceptor } from './perfil.interceptor';

describe('PerfilInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PerfilInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PerfilInterceptor = TestBed.inject(PerfilInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
