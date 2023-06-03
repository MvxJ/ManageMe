import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskDetailComponent } from "src/app/components/tasks/task-detail/task-detail.component";
import { TaskFormComponent } from "src/app/components/tasks/task-form/task-form.component";
import { TasksDashboardComponent } from "src/app/components/tasks/tasks-dashboard/tasks-dashboard.component";
import { TasksListComponent } from "src/app/components/tasks/tasks-list/tasks-list.component";


const routes: Routes = [
  {
    path: '',
    component: TasksDashboardComponent,
    children: [
      {path: '', component: TasksListComponent},
      {path: 'detail/:id', component: TaskDetailComponent},
      {path: 'add', component: TaskFormComponent},
      {path: 'edit/:id', component: TaskFormComponent}
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

export class TasksModule { }
