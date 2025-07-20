import { TestBed } from '@angular/core/testing';

import { NanoLinkShortenerService } from './nano-link-shortener-service';

describe('NanoLinkShortenerService', () => {
  let service: NanoLinkShortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanoLinkShortenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
