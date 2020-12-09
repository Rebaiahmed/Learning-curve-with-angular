import { Observable, fromEvent } from 'rxjs';
import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

const searchText$: Observable<string> = fromEvent<any>(
  this.input.nativeElement,
  'keyup'
).pipe(
  map((event) => event.target.value),
  startWith(''),
  debounceTime(400),
  distinctUntilChanged()
);


const lesson$ : Observable<Lesson[]> = searchText$
.pipe(
  switchMap(search =>(){
    const params = new HttpParams().set("search", search);
    return this.http.get("/api/book/", { params });
  })
).subscribe();
