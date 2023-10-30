import { TestBed } from '@angular/core/testing';

import { PaginaProtegidaGuard } from './pagina-protegida.guard';

describe('PaginaProtegidaGuard', () => {
  let guard: PaginaProtegidaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaginaProtegidaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
