import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { SuperUserComponent } from './dashboard/super-user/super-user.component';

@NgModule({
  declarations: [DashboardComponent, SuperUserComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
