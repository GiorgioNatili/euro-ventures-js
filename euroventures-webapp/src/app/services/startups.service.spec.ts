import { TestBed, inject } from '@angular/core/testing';

import { StartupsService } from './startups.service';

describe('StartupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartupsService]
    });
  });

  it('should be created', inject([StartupsService], (service: StartupsService) => {
    expect(service).toBeTruthy();
  }));
});
