import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { ProjectModel } from 'src/app/models/project.model';
import { TaskModel } from 'src/app/models/task.model';
import { UserModel } from 'src/app/models/user.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-functionality-detail',
  templateUrl: './functionality-detail.component.html',
  styleUrls: ['./functionality-detail.component.scss']
})
export class FunctionalityDetailComponent {
  constructor(
    private route: ActivatedRoute, 
    private functionalityService: FunctionalityService, 
    private router: Router,
    private userService: UserService,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {

  }

  functionality: FunctionalityModel = {
    key: '',
    description: '',
    owner: '',
    priority: '',
    projectKey: '',
    status: '',
    title: ''
  };
  editIcon = faEdit;
  deleteIcon = faTrash;
  project: ProjectModel|null = null;
  owner: UserModel|null = null;
  displayAction = false;
  tasks: TaskModel[] = [];

  async ngOnInit() {
      const localUser = localStorage.getItem("user");

      if (localUser) {
        const user = JSON.parse(localUser);

        this.displayAction ?? user.role == 'devops';
      }

      const functionalityKey = this.route.snapshot.params['id'];
      await this.functionalityService.getFunctionalities().subscribe(functionalities => {
        const result = functionalities.filter(functionality => functionality.key == functionalityKey)
        this.functionality = result[0];

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

      this.taskService.getTasksByFuncitonalityKey(this.functionality.key).subscribe(
        tasks => {
          if (tasks.length > 0) {
            this.tasks = tasks;
          }
        })
      });
  }

  deleteFunctionality() {
    if (this.functionality) {
      this.functionalityService.deleteFunctionality(this.functionality);
      this.router.navigateByUrl('/functionalities');
    }
  }

  navigateToUserPage() {
    this.router.navigateByUrl(`/users/detail/${this.owner?.id}`)
  }
}
