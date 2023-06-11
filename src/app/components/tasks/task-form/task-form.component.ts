import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { TaskFormModel } from 'src/app/models/task-form.model';
import { TaskModel } from 'src/app/models/task.model';
import { UserModel } from 'src/app/models/user.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  constructor (
    private route: ActivatedRoute, 
    private userService: UserService, 
    private functionalityService: FunctionalityService,
    private taskService: TaskService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  
  form!: FormGroup<TaskFormModel>
  editorMode = false;
  taskKey = '';
  users: Array<UserModel>|null = null;
  functionalities: Array<FunctionalityModel>|null = null;
  task: TaskModel = {
    description: '',
    key: '',
    name: '',
    priority: '',
    status: '',
    timeToDone: 0,
    userKey: '',
    functionalityKey: '',
    createdAt: new Date(),
    finishedAt: null
  };

  ngOnInit() {
    this.taskKey = this.route.snapshot.params['id']
    this.editorMode = !this.taskKey;
    const key = localStorage.getItem("selectedProject")
    this.task = window.history.state;

    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });;

    if (key) {
      this.functionalityService.findFunctionalitiesByProjectKey(key).subscribe((functionalities) => {
        this.functionalities = functionalities;
      });
    }

    this.form = this.formBuilder.group({
      name: [
        this.task ? this.task.name : '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [
        this.task ? this.task.description : '',
        [
          Validators.required
        ]
      ],
      functionalityKey: [
        this.task ? this.task.functionalityKey : '',
        [
          Validators.required
        ]
      ],
      userKey: [
        this.task ? this.task.userKey : '',
        [
          Validators.required
        ]
      ],
      timeToDone: [
        this.task ? this.task.timeToDone : 1,
        [
          Validators.required
        ]
      ],
      priority: [
        this.task ? this.task.priority : '',
        Validators.required
      ],
      status: [
        this.task ? this.task.status : '',
      ]
    })
  }

  async addTask() {
    const name = this.form.get('name')?.value;
    const description = this.form.get('description')?.value;
    const functionalityKey = this.form.get('functionalityKey')?.value;
    const userKey = this.form.get('userKey')?.value;
    const timeToDone = this.form.get('timeToDone')?.value;
    const priority = this.form.get('priority')?.value;

    if (this.task) {
      this.task.status = 'onhold';
      this.task.createdAt = new Date();

      if (name) {
        this.task.name = name;
      }

      if (description) {
        this.task.description = description;
      }

      if (functionalityKey) {
        this.task.functionalityKey = functionalityKey;
      }

      if (userKey) {
        this.task.userKey = userKey;
      }

      if (timeToDone) {
        this.task.timeToDone = timeToDone;
      }

      if (priority) {
        this.task.priority = priority;
      }

      const response = await this.taskService.addTask(this.task);
      this.router.navigateByUrl(`/tasks/detail/${response.id}`);
    }
  }

  async saveTask() {
    const name = this.form.get('name')?.value;
    const description = this.form.get('description')?.value;
    const functionalityKey = this.form.get('functionalityKey')?.value;
    const userKey = this.form.get('userKey')?.value;
    const timeToDone = this.form.get('timeToDone')?.value;
    const priority = this.form.get('priority')?.value;
    const status = this.form.get('status')?.value;

    if (this.task) {
      if (name) {
        this.task.name = name;
      }

      if (description) {
        this.task.description = description;
      }

      if (functionalityKey) {
        this.task.functionalityKey = functionalityKey;
      }

      if (userKey) {
        this.task.userKey = userKey;
      }

      if (timeToDone) {
        this.task.timeToDone = timeToDone;
      }

      if (priority) {
        this.task.priority = priority;
      }

      if (status && status != this.task.status) {
        this.task.status = status
      }

      await this.taskService.updateTask(this.task);
      this.router.navigateByUrl(`/tasks/detail/${this.task.key}`);
    }
  }
}

