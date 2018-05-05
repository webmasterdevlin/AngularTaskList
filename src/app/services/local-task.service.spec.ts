import { TestBed, inject } from '@angular/core/testing';

import { LocalTaskService } from './local-task.service';

describe('LocalTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalTaskService]
    });
  });

  it('should be created', inject([LocalTaskService], (service: LocalTaskService) => {
    expect(service).toBeTruthy();
  }));
});
