import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnDestroy {
  projects: any;
  displayNavigation: boolean = false;
  private authSubscription: Subscription| undefined;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private authService: AuthService
  ) {}

    selectedProjectKey: string = '';
    userRole: string = '';
    roleAdmin = false;
    roleDevops = false;
    roleDeveloper = false;

  async ngOnInit() {
    await this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });

    this.authSubscription = this.authService.isUserLoggedIn.subscribe((loggedIn: boolean) => {
      this.displayNavigation = loggedIn;
    });

    const storageKey = localStorage.getItem("selectedProject");
    
    if (storageKey) {
      this.selectedProjectKey = storageKey;
    }

    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      this.userRole = user.role;

      switch (this.userRole) {
        case 'Admin':
          this.roleAdmin = true;
          break;
        case 'Developer':
          this.roleDeveloper = true;
          break;
        case 'Devops':
          this.roleDevops = true;
          break;
      }
    }
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  logOut() {
    localStorage.removeItem('user');
    this.authService.setUserLoggedIn(false);
    location.reload()
    this.router.navigateByUrl('/login');
  }

  updateWorkingProject() {
    const selectBox = document.getElementById('projectSelectBox');

    if (selectBox) {
      const projectKey = (<HTMLInputElement>selectBox).value;
      localStorage.setItem('selectedProject', projectKey);
      window.location.reload();
    }
  }
}
