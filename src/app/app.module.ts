import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { enviroment } from 'src/enviroment/enviroment';
import { LogInComponent } from './components/log-in/log-in.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

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
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
