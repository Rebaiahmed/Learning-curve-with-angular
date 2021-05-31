import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCount } from '../store/counter.selector';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  counter$ : Observable<number>

  constructor(private store: Store<CounterState>) {

   }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCount)
  }

}
