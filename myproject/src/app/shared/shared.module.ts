import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { NavbarComponent } from './components/navbar-component';
import { FooterComponent } from './components/footer.component';

import { NamePipe } from './pipes/capitalize.pipe';
import { MyPipe } from './pipes/mypipe.pipe';

import { NameDirective } from './directive/directive.directive';

const components = [
  LoaderComponent,
  ModalComponent,
  ButtonComponent,
  NavbarComponent,
  FooterComponent,
];
const pipes = [NamePipe, MyPipe];
const directives = [NameDirective];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    components,
  ],
  declarations: [components, pipes, directives],
  providers: [],
})
export class SharedModule {}
