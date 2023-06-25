import { Component, OnInit } from '@angular/core';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { TaskModel } from 'src/app/models/task.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  projectKey: string|null = '';
  functionalities: Array<FunctionalityModel> = [];
  tasks: Array<TaskModel> = [];

  constructor (private functionalityService: FunctionalityService, private taskService: TaskService) {}

  async ngOnInit() {
    this.projectKey = localStorage.getItem("selectedProject");

    this.projectKey = localStorage.getItem("selectedProject");

    if (this.projectKey) {
      this.taskService.getTasksByProjectKey(this.projectKey).subscribe((tasks) => {
        this.tasks = tasks;
      });
    }
  }
}
