import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-card-large',
  templateUrl: './task-card-large.component.html',
  styleUrls: ['./task-card-large.component.scss']
})
export class TaskCardLargeComponent {
  @Input() task: TaskModel|null = null;
}
