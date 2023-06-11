import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsListComponent } from './components/project/projects-list/projects-list.component';
import { ProjectsDashboardComponent } from './components/project/projects-dashboard/projects-dashboard.component';
import { UsersDashboardComponent } from './components/user/users-dashboard/users-dashboard.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { enviroment } from 'src/enviroment/enviroment';
import { LogInComponent } from './components/log-in/log-in.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { ProjectCardComponent } from './components/project/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { ProjectFormComponent } from './components/project/project-form/project-form.component';
import { FunctionalitiesDashboardComponent } from './components/functionalities/functionalities-dashboard/functionalities-dashboard.component';
import { FunctionalitiesListComponent } from './components/functionalities/functionalities-list/functionalities-list.component';
import { FunctionalityFormComponent } from './components/functionalities/functionality-form/functionality-form.component';
import { FunctionalityDetailComponent } from './components/functionalities/functionality-detail/functionality-detail.component';
import { FunctionalityCardComponent } from './components/functionalities/functionality-card/functionality-card.component';
import { TasksDashboardComponent } from './components/tasks/tasks-dashboard/tasks-dashboard.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';
import { TaskDetailComponent } from './components/tasks/task-detail/task-detail.component';
import { TaskCardLargeComponent } from './components/tasks/task-card-large/task-card-large.component';
import { UserFeatureComponent } from './components/user-feature/user-feature.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { KhanbanBoardComponent } from './components/khanban-board/khanban-board.component';
import { KhanbanTaskComponent } from './components/khanban-task/khanban-task.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';


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
    UsersListComponent,
    LogInComponent,
    BackButtonComponent,
    ScrollTopComponent,
    UserCardComponent,
    UserDetailComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    UserFormComponent,
    ProjectFormComponent,
    FunctionalitiesDashboardComponent,
    FunctionalitiesListComponent,
    FunctionalityFormComponent,
    FunctionalityDetailComponent,
    FunctionalityCardComponent,
    TasksDashboardComponent,
    TasksListComponent,
    TaskFormComponent,
    TaskDetailComponent,
    TaskCardLargeComponent,
    UserFeatureComponent,
    StatusBadgeComponent,
    KhanbanBoardComponent,
    KhanbanTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
