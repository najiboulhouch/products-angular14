import { TestBed } from '@angular/core/testing';

import { EventDriverService } from './event.driver.service';

describe('EventDriverService', () => {
  let service: EventDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
