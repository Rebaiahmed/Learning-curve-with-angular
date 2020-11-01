import { SkipSelf } from '@angular/core';
import { NgModule, Optional } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {

constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }

}
