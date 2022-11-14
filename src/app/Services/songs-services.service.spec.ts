import { TestBed } from '@angular/core/testing';

import { SongsServicesService } from './songs-services.service';

describe('SongsServicesService', () => {
  let service: SongsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
