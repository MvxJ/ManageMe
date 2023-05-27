import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkDashboardComponent } from 'src/app/components/work/work-dashboard/work-dashboard.component';
import { UserWorkDetailsComponent } from 'src/app/components/work/user-work-details/user-work-details.component';

const routes: Routes = [
  {
    path: '',
    component: WorkDashboardComponent,
    children: [
      {path: '', component: UserWorkDetailsComponent},
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

export class WorkModule { }
