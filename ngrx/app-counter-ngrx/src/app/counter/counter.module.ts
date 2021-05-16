import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';
import { FormsModule } from '@angular/forms';


const COUNTER_STATE_NAME = 'counter'

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterInputComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME,reducer)
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule { }
