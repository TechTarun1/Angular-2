import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from '../gaurds/auth.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'user-details', component: UserDetailsComponent },
      { path: 'dashboard', component: AdminDashboardComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }