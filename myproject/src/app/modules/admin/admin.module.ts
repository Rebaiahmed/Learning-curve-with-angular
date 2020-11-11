import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
