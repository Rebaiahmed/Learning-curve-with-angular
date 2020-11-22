import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  of,
  interval,
  throwError,
  concat,
  merge,
  zip,
  timer,
  from,
  fromEvent,
} from 'rxjs';
import {
  map,
  delay,
  take,
  catchError,
  mapTo,
  mergeMap,
  retry,
  distinct,
  toArray,
  reduce,
  switchMap,
  tap,
} from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    /*  this.exampleForkJoins();
    this.forkJoinObersavnblesCompletesAfterDelay();
    this.handlingErrors();
    this.excuctioninConsequence();
    this.testZipOperation();
    this.catchError();
    this.checkretry();
    this.disticntOperation();
    this.toArray();
    this.operationMapTo();
    this.reduceOperation();*/
    this.taoOperator();
  }

  private exampleForkJoins() {
    forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      users: ajax.getJSON('https://api.github.com/users'),
    }).subscribe(console.log);
  }

  private forkJoinObersavnblesCompletesAfterDelay() {
    const MyPromise = (val) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
      );
    const example = forkJoin({
      sourceOne: of('Hello'),
      sourceTwo: of('World').pipe(delay(1000)),
      sourceThree: interval(1000).pipe(take(1)),
      sourceFour: interval(1000).pipe(take(2)),
      sourceFive: MyPromise('RESULT'),
    });

    const subscribe = example.subscribe((val) => console.log(val));
  }

  private handlingErrors() {
    const example = forkJoin({
      // emit 'Hello' immediately
      sourceOne: of('Hello'),
      // emit 'World' after 1 second
      sourceTwo: of('World').pipe(delay(1000)),
      // throw error
      sourceThree: throwError('This will error'),
    }).pipe(catchError((error) => of(error)));
    const subscribe = example.subscribe((val) => console.log(val));
  }

  private excuctioninConsequence() {
    concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
  }

  private mergeObservables() {
    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 2 seconds
    const second = interval(2000);
    //emit every 1.5 seconds
    const third = interval(1500);
    //emit every 1 second
    const fourth = interval(1000);

    const mergeExample = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );
    const subscribe = mergeExample.subscribe((val) => console.log(val));
  }

  private testZipOperation() {
    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');

    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(1000)),
      sourceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(3000))
    );
    const subscribe = example.subscribe((val) => console.log(val));
  }

  private catchError() {
    const source = throwError('This is an error!');
    const example = source.pipe(catchError((val) => of(`I caught: ${val}`)));
    const subscribe2 = example.subscribe((val) => console.log(val));

    //create promise that immediately rejects
    const myBadPromise = () =>
      new Promise((resolve, reject) => reject('Rejected!'));

    const source2 = timer(1000);

    source.pipe(
      mergeMap((_) =>
        from(myBadPromise()).pipe(
          catchError((error) => of(`Bad Promise: ${error}`))
        )
      )
    );

    const subscribe = example.subscribe((val) => console.log(val));
  }

  private checkretry() {
    const source = interval(1000);

    const example = source.pipe(
      mergeMap((val) => {
        //throw error for demonstration
        if (val > 5) {
          return throwError('Error!');
        }
        return of(val);
      }),
      //retry 2 times on error
      retry(2)
    );

    const susbcribe = example.subscribe({
      next: (val) => console.log(val),
      error: (val) => console.log(`${val}: Retried 2 times then quit!`),
    });
  }

  private disticntOperation() {
    of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5).pipe(distinct()).subscribe(console.log);
  }

  private toArray() {
    interval(100).pipe(take(10), toArray()).subscribe(console.log);
  }

  private operationMapTo() {
    //emit every click on document
    const source = fromEvent(document, 'click');
    //map all emissions to one value
    const example = source.pipe(mapTo('GOODBYE WORLD!'));
    //output: (click)'GOODBYE WORLD!'...
    const subscribe = example.subscribe((val) => console.log(val));
  }

  private reduceOperation() {
    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    const subscribe = example.subscribe((val) => console.log('Sum:', val));
  }

  private testSwicthMap() {
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(console.log);
  }

  private taoOperator() {
    const source = of(1, 2, 3, 4, 5);

    const example = source.pipe(
      tap((val) => console.log(`BEFORE MAP: ${val}`)),
      map((val) => val + 10),
      tap((val) => console.log(`AFTER MAP: ${val}`))
    );
    const subscribe = example.subscribe((val) => console.log(val));
  }
}
