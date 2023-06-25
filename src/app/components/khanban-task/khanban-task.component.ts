import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { UserModel } from 'src/app/models/user.model';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-khanban-task',
  templateUrl: './khanban-task.component.html',
  styleUrls: ['./khanban-task.component.scss']
})
export class KhanbanTaskComponent implements OnInit {
  @Input() task: TaskModel = { createdAt: new Date, description: '', finishedAt: null, functionalityKey: '', projectKey: '', key: '', name: '', priority: '', status: '', timeToDone: 0, userKey: '' };
  user: UserModel | null = null;

  constructor(private userService: UserService, private taskService: TaskService) {}

  ngOnInit() {
    if (this.task && this.task.userKey) {
      this.userService.getUsers().subscribe((users) => {
        const result = users.filter(user => user.id == this.task.userKey);
          this.user = result[0];
      });
    }
  }

  async onTaskStatusChange() {
    console.log('test');
    try {
      if (this.task.status == 'done') {
        this.task.finishedAt = new Date();
      }
      
      await this.taskService.updateTask(this.task);
    } catch (error) {
      console.error('Failed to update task status:', error);
      // Handle the error
    }
  }
}
