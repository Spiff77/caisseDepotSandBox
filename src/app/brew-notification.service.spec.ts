import { TestBed } from '@angular/core/testing';

import { BrewNotificationService } from './brew-notification.service';

describe('BrewNotificationService', () => {
  let service: BrewNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
