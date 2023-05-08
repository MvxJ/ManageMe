import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LogInComponent},
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
