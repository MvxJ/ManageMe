import { Component, Input, OnInit } from '@angular/core';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { ProjectModel } from 'src/app/models/project.model';
import { UserModel } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionality-card',
  templateUrl: './functionality-card.component.html',
  styleUrls: ['./functionality-card.component.scss']
})
export class FunctionalityCardComponent implements OnInit{
  @Input() functionality: FunctionalityModel = {
    key: '',
    description: '',
    owner: '',
    priority: '',
    projectKey: '',
    status: '',
    title: ''
  }

  constructor (
    private userService: UserService, 
    private projectService: ProjectService,
    private functionalityService: FunctionalityService,
    private router: Router
  ) {}

  project: ProjectModel|null = null;
  owner: UserModel|null = null;
  infoIcon = faCircleInfo;
  editIcon = faEdit;
  deleteIcon = faTrash;
  displayAciotns = false;

  ngOnInit() {
    if (this.functionality?.owner) {
      this.userService.getUserById(this.functionality?.owner).subscribe(
        users => {
          if (users.length > 0) {
            this.owner = users[0];
          }
        }
      );
    } 
    
    if (this.functionality?.projectKey) {
      this.projectService.getProjectById(this.functionality.projectKey).subscribe(
        projects => {
          if (projects.length > 0) {
            this.project = projects[0];
          }
        }
      )
    }

    const localUser = localStorage.getItem("user");

    if (localUser) {
      const user = JSON.parse(localUser);
      if (user.roles == 'devops') {
        this.displayAciotns = true;
      } else {
        this.displayAciotns = false;
      }
    }
  }

  deleteFunctionality() {
    this.functionalityService.deleteFunctionality(this.functionality);
    this.router.navigateByUrl('/functionalities');
  }
}
