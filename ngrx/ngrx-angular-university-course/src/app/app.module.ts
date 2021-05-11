import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
;

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment'


import {EffectsModule} from '@ngrx/effects';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {EntityDataModule} from '@ngrx/data';
import { AppRoutingModule } from './app-routing.module';

import {AuthModule} from './auth/auth.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import {metaReducers, reducers} from './reducers';

const routes: Routes = [
  {
      path: 'courses',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
      canActivate: [AuthGuard]
  },
  {
      path: '**',
      redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatToolbarModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks : {
              strictStateImmutability: true,
              strictActionImmutability: true,
              strictActionSerializability: true,
              strictStateSerializability:true
          }
      }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
     StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
