import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { DatePipe } from '@angular/common';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit{
  task: TaskModel = {
    createdAt: new Date(),
    description: '',
    finishedAt: null,
    functionalityKey: '',
    key: '',
    name: '',
    priority: '',
    status: '',
    timeToDone: 0,
    userKey: '',
    projectKey: ''
  }
  editIcon = faEdit;
  deleteIcon = faTrash;
  user: UserModel|null = null;
  functionality: FunctionalityModel|null = null;
  createdDate: string|null = '';
  finishedDate: string|null = '';
  project: ProjectModel|null = null;

  constructor (
    private taskService: TaskService, 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private functionalityService: FunctionalityService,
    private datePipe: DatePipe,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const taskKey = this.route.snapshot.params['id'];
    const tasks = this.taskService.getTasks().subscribe(tasks => {
      const result = tasks.filter(task => task.key == taskKey)
      this.task = result[0];
      

      if (this.task && this.task.userKey) {
        this.userService.getUsers().subscribe((users) => {
          const result = users.filter(user => user.id == this.task.userKey);
            this.user = result[0];
        });
      }

      if (this.task && this.task.functionalityKey) {
        this.functionalityService.getFunctionalities().subscribe((functionalities) => {
          const results = functionalities.filter(functionality => functionality.key == this.task.functionalityKey);
          this.functionality = results[0];
        });
      }

      if (this.task && this.task.projectKey) {
        this.projectService.getProjectById(this.task.projectKey).subscribe(projects => {
          if (projects.length > 0) {
            this.project = projects[0];
          }
        })
      }
    });


    this.finishedDate = this.datePipe.transform(this.task.finishedAt, 'dd/MM/yyyy');
    this.createdDate = this.datePipe.transform(this.task.createdAt, 'dd/MM/yyyy');
  }

  async deleteTask() {
    await this.taskService.deleteTask(this.task);
    this.router.navigateByUrl("/tasks");
  }
}
