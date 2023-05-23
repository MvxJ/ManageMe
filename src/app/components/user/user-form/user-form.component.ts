import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/models/user-form.model';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  editorMode: boolean = false;
  userKey: string = '';

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  form!: FormGroup<UserFormModel>
  user: UserModel ={
    id: '',
    name: '',
    password: '',
    role: '',
    surname: '',
    username: ''
  }

  ngOnInit(): void {
    this.userKey = this.route.snapshot.params['id']
    this.editorMode = !this.userKey;
    this.user = window.history.state;

    this.form = this.formBuilder.group({
      username: [
        this.user ? this.user.username : '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      password: [
        this.user ? this.user.password : '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      name: [
        this.user ? this.user.name : '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      surname: [
        this.user ? this.user.surname : '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      role: [
        this.user ? this.user.role : '',
        [
          Validators.required
        ]
      ]
    })
  }

  async saveUser() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const name = this.form.get('name')?.value;
    const surname = this.form.get('surname')?.value;
    const role = this.form.get('role')?.value;

    if (username) {
      this.user.username = username;
    }

    if (password) {
      this.user.password = password;
    }

    if (name) {
      this.user.name = name;
    }
    
    if (surname) {
      this.user.surname = surname;
    }
    
    if (role) {
      this.user.role = role
    }
        
    this.userService.updateUser(this.user);
    this.router.navigateByUrl(`/users/detail/${this.user.id}`);
  }

  async addUser() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const name = this.form.get('name')?.value;
    const surname = this.form.get('surname')?.value;
    const role = this.form.get('role')?.value;

    if (username) {
      this.user.username = username;
    }

    if (password) {
      this.user.password = password;
    }

    if (name) {
      this.user.name = name;
    }
    
    if (surname) {
      this.user.surname = surname;
    }
    
    if (role) {
      this.user.role = role
    }

    console.log(this.user);
        
    const respone = await this.userService.addUser(this.user);
    this.router.navigateByUrl(`/users/detail/${respone.id}`);
  }
}
