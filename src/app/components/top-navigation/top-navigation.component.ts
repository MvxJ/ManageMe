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

  async ngOnInit() {
    await this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });

    this.authSubscription = this.authService.isUserLoggedIn.subscribe((loggedIn: boolean) => {
      this.displayNavigation = loggedIn;
    });
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
    }
  }
}
