import { TestBed } from '@angular/core/testing';

import { PaypalServerService } from './paypal-server.service';

describe('PaypalServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaypalServerService = TestBed.get(PaypalServerService);
    expect(service).toBeTruthy();
  });
});
