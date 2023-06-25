import { Component } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { TaskModel } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectService, 
    private router: Router,
    private functionalityService: FunctionalityService,
    private taskService: TaskService
  ) {

  }

  project: ProjectModel = {
    description: '',
    key: '',
    title: ''
  };
  editIcon = faEdit;
  deleteIcon = faTrash;
  functionalities: Array<FunctionalityModel>|null = [];
  displayAction = false;
  tasks: Array<TaskModel>|null = [];
  timeToDone: number = 0;
  doneTime: number = 0;

  ngOnInit() {
      const projectKey = this.route.snapshot.params['id'];
      const projects = this.projectService.getProjects().subscribe(projects => {
        const result = projects.filter(project => project.key == projectKey)
        this.project = result[0];

        this.functionalityService.findFunctionalitiesByProjectKey(projectKey).subscribe(functionalities => {
          this.functionalities = functionalities;
        })

        if (this.project) {
          this.taskService.getTasksByProjectKey(this.project.key).subscribe(tasks => {
            this.tasks = tasks;
            const doneTasks = tasks.filter(task => task.status ==  'done');
            const notFinishedTasks = tasks.filter(task => task.status == 'onhold' || task.status == 'doing');
  
            doneTasks.forEach(tasks => {
              this.doneTime += tasks.timeToDone;
            });
  
            notFinishedTasks.forEach(task => {
              this.timeToDone += task.timeToDone;
            });
          })
        }
      })

      const localUser = localStorage.getItem("user");

      if (localUser) {
        const user = JSON.parse(localUser);
  
        this.displayAction ?? user.role == 'devops';
      }

  }

  deleteProject() {
    if (this.project) {
      this.projectService.deleteProject(this.project);
      this.router.navigateByUrl('/projects');
    }
  }
}
