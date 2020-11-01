import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
{ path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m =>
   m.AdminModule) },
{ path: 'auth', loadChildren: () => import(`./authentication/authentication.module`).then(m => m.AuthenticationModule) },
 {
        path: '**',
        redirectTo: 'auth'
      }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }