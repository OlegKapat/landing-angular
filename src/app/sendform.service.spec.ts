import { TestBed, inject } from '@angular/core/testing';

import { SendformService } from './sendform.service';

describe('SendformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendformService]
    });
  });

  it('should be created', inject([SendformService], (service: SendformService) => {
    expect(service).toBeTruthy();
  }));
});
