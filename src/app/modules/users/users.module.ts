import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from 'src/app/components/user/users-dashboard/users-dashboard.component';
import { UsersListComponent } from 'src/app/components/user/users-list/users-list.component';
import { UserDetailComponent } from 'src/app/components/user/user-detail/user-detail.component';
import { UserFormComponent } from 'src/app/components/user/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsersDashboardComponent,
    children: [
      {path: '', component: UsersListComponent},
      {path: 'detail/:id', component: UserDetailComponent},
      {path: 'add', component: UserFormComponent},
      {path: 'edit/:id', component: UserFormComponent}
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
