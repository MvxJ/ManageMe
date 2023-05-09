import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  constructor(private route: ActivatedRoute) {}
  users: Array<UserModel> = [
    {
      id: 'fef0h2k7',
      name: 'John',
      password: 'password',
      roles: [{key: 'fe10', name: 'Admin'}],
      surname: 'Doe',
      username: 'johndoe'
    },
    {
      id: 'fef0h2k8',
      name: 'Alan',
      password: 'password',
      roles: [{key: 'fe12', name: 'Developer'}],
      surname: 'Marek',
      username: 'alanmarek'
    }
  ];
  key: string|null = null;
  user: UserModel ={
    id: '',
    name: '',
    password: '',
    roles: [{key: '', name: ''}],
    surname: '',
    username: ''
  }
  editIcon = faEdit;
  deleteIcon = faTrash;
  showPassword: boolean = false;
  inputPasswordType: string = 'password';
  showPasswordIcon = faEye;
  hidePasswordIcon = faEyeSlash;

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('id')
    const results = this.users.filter(user => user.id == this.key);
    if(results) {
      this.user = results[0];
    }
  }

  toggleVisiblity() {
    this.showPassword = !this.showPassword;
    this.inputPasswordType = this.showPassword ? 'text' : 'password';
  }
}
