import { Component } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-user-work-details',
  templateUrl: './user-work-details.component.html',
  styleUrls: ['./user-work-details.component.scss']
})
export class UserWorkDetailsComponent {
  finishedTasks: any;
  inProgressTasks: any;
  onHoldTasks: any;
  tasks: Array<TaskModel> = [
    {
      name: 'First task',
      description: 'Create first task',
      status: 'onhold',
      key: '123',
      functionalityKey: 'asd',
      priority: '1',
      timeToDone: 3,
      userKey: 'ass',
      createdAt: new Date,
      finishedAt: new Date()
    },
    {
      name: 'Second task',
      description: 'Create first task',
      status: 'inprogress',
      key: '321',
      functionalityKey: 'asd',
      priority: '5',
      timeToDone: 3,
      userKey: 'ass',
      createdAt: new Date,
      finishedAt: new Date()
    },
    {
      name: 'Third task',
      description: 'Create first task',
      status: 'done',
      key: '432',
      functionalityKey: 'asd',
      priority: '0',
      timeToDone: 1,
      userKey: 'ass',
      createdAt: new Date,
      finishedAt: new Date()
    }
  ]

  ngOnInit() {
    this.onHoldTasks = this.tasks.filter(task => task.status == 'onhold');
    this.inProgressTasks = this.tasks.filter(task => task.status == 'inprogress');
    this.finishedTasks = this.tasks.filter(task => task.status == 'done');
  }
}
