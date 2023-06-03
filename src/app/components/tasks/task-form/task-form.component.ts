import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { UserModel } from 'src/app/models/user.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  constructor (
    private route: ActivatedRoute, 
    private userService: UserService, 
    private functionalityService: FunctionalityService
  ) {}
  
  editorMode = false;
  taskKey = '';
  users: Array<UserModel>|null = null;
  functionalities: Array<FunctionalityModel>|null = null;

  ngOnInit() {
    this.taskKey = this.route.snapshot.params['id']
    this.editorMode = !this.taskKey;
    const key = localStorage.getItem("selectedProject")

    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });;

    if (key) {
      this.functionalityService.findFunctionalitiesByProjectKey(key).subscribe((functionalities) => {
        this.functionalities = functionalities;
      });
    }
  }

  addTask() {

  }

  saveTask() {
    
  }
}

