import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';
import { ModuleRoutingModule } from './modules/module.routing';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModuleRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
