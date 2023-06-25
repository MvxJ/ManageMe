import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-task-card-large',
  templateUrl: './task-card-large.component.html',
  styleUrls: ['./task-card-large.component.scss']
})
export class TaskCardLargeComponent implements OnInit {
  @Input() task: TaskModel = {
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
  };

  constructor (
    private taskService: TaskService, 
    private router: Router, 
    private userService: UserService
  ) {}

  infoIcon = faCircleInfo;
  editIcon = faEdit;
  deleteIcon = faTrash;
  user: UserModel|null = null;

  ngOnInit(): void {
    if (this.task && this.task.userKey) {
      this.userService.getUsers().subscribe((users) => {
        const result = users.filter(user => user.id == this.task.userKey);
          this.user = result[0];
      });
    }
  }  

  deleteTask() {
    this.taskService.deleteTask(this.task);
    this.router.navigateByUrl('/tasks');
  }
}
