import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {

  constructor(private http:HttpClient) {

  }

  findAllCourses(): Observable<Course[]> {
      return this.http.get('/api/courses')
          .pipe(
              map(res => res['payload'])
          );
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseUrl}`);
  }

  findLessons(
      courseId:number,
      pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

      return this.http.get<Lesson[]>('/api/lessons', {
          params: new HttpParams()
              .set('courseId', courseId.toString())
              .set('sortOrder', 'asc')
              .set('pageNumber', pageNumber.toString())
              .set('pageSize', pageSize.toString())
      });
  }


  saveCourse(courseId: string | number, changes: Partial<Course>) {
      return this.http.put('/api/course/' + courseId, changes);
  }
}
