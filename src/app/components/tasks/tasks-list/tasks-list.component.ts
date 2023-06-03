import { Component } from '@angular/core';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { TaskModel } from 'src/app/models/task.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  projectKey: string|null = '';
  functionalities: Array<FunctionalityModel> = [];
  tasks: Array<TaskModel> = [];

  constructor (private functionalityService: FunctionalityService, private taskService: TaskService) {}

  onInit() {
    this.projectKey = localStorage.getItem("selectedProject");

    if (this.projectKey) {
      this.functionalityService.findFunctionalitiesByProjectKey(this.projectKey).subscribe((functionalities) => {
        this.functionalities = functionalities;
      })

      if (this.functionalities) {
        this.functionalities.forEach(functionality => {
          this.taskService.getTasksByFuncitonalityKey(functionality.key).subscribe((tasks) => {
            this.tasks.concat(tasks);
          })
        });
      }
    }
  }
}
