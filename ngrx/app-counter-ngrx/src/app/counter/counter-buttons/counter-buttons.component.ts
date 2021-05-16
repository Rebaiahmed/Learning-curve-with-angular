import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement()
  {
    this.store.dispatch(increment())
  }

  onDecrement()
  {
    this.store.dispatch(decrement())
  }

  onReset()
  {
    this.store.dispatch(reset())
  }

}
