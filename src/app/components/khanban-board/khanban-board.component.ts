import { Component, OnInit } from '@angular/core';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { TaskModel } from 'src/app/models/task.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-khanban-board',
  templateUrl: './khanban-board.component.html',
  styleUrls: ['./khanban-board.component.scss']
})
export class KhanbanBoardComponent implements OnInit {
  tasks: TaskModel[] = [];
  todo: TaskModel[] = [];
  doing: TaskModel[] = [];
  done: TaskModel[] = [];
  projectKey: string|null = '';
  functionalities: FunctionalityModel[] = [];

  constructor(private taskService: TaskService, private functionalityService: FunctionalityService) {}

  async ngOnInit() {
    this.projectKey = localStorage.getItem("selectedProject");

    if (this.projectKey) {
      this.taskService.getTasksByProjectKey(this.projectKey).subscribe((tasks) => {
        this.todo = tasks.filter(task => task.status === 'onhold');
        this.doing = tasks.filter(task => task.status === 'doing');
        this.done = tasks.filter(task => task.status === 'done');
      });
    }
  }
}
