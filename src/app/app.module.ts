import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavigationComponent,
    NotFoundComponent,
    DashboardComponent,
    ProjectsListComponent,
    ProjectsDashboardComponent,
    UsersDashboardComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
