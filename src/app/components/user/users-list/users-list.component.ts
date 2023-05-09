import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
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
  ]
}
