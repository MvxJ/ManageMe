import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AppGuard } from './guards/app.guard';
import { AdminGuard } from './guards/admin.guard';
import { KhanbanBoardComponent } from './components/khanban-board/khanban-board.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: '', component: DashboardComponent, canActivate: [AppGuard]},
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule), canActivate: [AppGuard]},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canActivate: [AppGuard, AdminGuard]},
  { path: 'functionalities', loadChildren: () => import('./modules/functionalities/functionalities.module').then(m => m.FunctionalitiesModule), canActivate: [AppGuard]},
  { path: 'khanban', component: KhanbanBoardComponent, canActivate: [AppGuard]},
  { path: "tasks", loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule), canActivate: [AppGuard]},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
