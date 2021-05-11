import { TestBed } from '@angular/core/testing';

import { CourseEntityService } from './course-entity.service';

describe('CourseEntityService', () => {
  let service: CourseEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
