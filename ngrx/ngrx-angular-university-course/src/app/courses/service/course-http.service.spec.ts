import { TestBed } from '@angular/core/testing';

import { CourseHttpService } from './course-http.service';

describe('CourseHttpService', () => {
  let service: CourseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
