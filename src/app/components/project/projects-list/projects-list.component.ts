import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: any
  displayAction = false;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });;
    
    const localUser = localStorage.getItem("user");

    if (localUser) {
      const user = JSON.parse(localUser);

      this.displayAction ?? user.role == 'devops';
    }
  }
}
