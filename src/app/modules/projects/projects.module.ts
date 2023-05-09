import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from 'src/app/components/projects-list/projects-list.component';
import { ProjectsDashboardComponent } from 'src/app/components/projects-dashboard/projects-dashboard.component';
import { ProjectDetailComponent } from 'src/app/components/project-detail/project-detail.component';
import { ProjectFormComponent } from 'src/app/components/project-form/project-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsDashboardComponent,
    children: [
      {path: '', component: ProjectsListComponent},
      {path: 'detail/:id', component: ProjectDetailComponent},
      {path: 'add', component: ProjectFormComponent},
      {path: 'edit/:id', component: ProjectFormComponent}
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
