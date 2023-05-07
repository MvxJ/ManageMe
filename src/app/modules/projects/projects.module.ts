import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from 'src/app/components/projects-list/projects-list.component';
import { ProjectsDashboardComponent } from 'src/app/components/projects-dashboard/projects-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsDashboardComponent,
    children: [
      {path: '', component: ProjectsListComponent},
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

export class ProjectsModule { }
