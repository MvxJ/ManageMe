import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from 'src/app/components/project/projects-list/projects-list.component';
import { ProjectsDashboardComponent } from 'src/app/components/project/projects-dashboard/projects-dashboard.component';
import { ProjectDetailComponent } from 'src/app/components/project/project-detail/project-detail.component';
import { ProjectFormComponent } from 'src/app/components/project/project-form/project-form.component';
import { DevopsGuard } from 'src/app/guards/devops.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectsDashboardComponent,
    children: [
      {path: '', component: ProjectsListComponent},
      {path: 'detail/:id', component: ProjectDetailComponent},
      {path: 'add', component: ProjectFormComponent, canActivate: [DevopsGuard]},
      {path: 'edit/:id', component: ProjectFormComponent, canActivate: [DevopsGuard]}
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
