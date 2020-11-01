import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { CommonModule } from '@angular/common';


const components =[ LoaderComponent, ModalComponent, ButtonComponent]


@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
     CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    components
  ],
  declarations: [components],
  providers: [],
})
export class SharedModule { }
