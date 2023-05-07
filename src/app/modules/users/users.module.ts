import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from 'src/app/components/users-dashboard/users-dashboard.component';
import { UsersListComponent } from 'src/app/components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersDashboardComponent,
    children: [
      {path: '', component: UsersListComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
