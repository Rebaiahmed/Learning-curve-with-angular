import { TestBed } from '@angular/core/testing';

import { LessonEntityService } from './lesson-entity.service';

describe('LessonEntityService', () => {
  let service: LessonEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
