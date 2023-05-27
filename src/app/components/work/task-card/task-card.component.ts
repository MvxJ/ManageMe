import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: TaskModel = {
    name: '',
    description: '',
    status: '',
    key: '',
    functionalityKey: '',
    priority: '',
    timeToDone: 0,
    userKey: '',
    createdAt: new Date,
    finishedAt: new Date
  };
}
