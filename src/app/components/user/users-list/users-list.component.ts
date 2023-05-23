import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users: any

  constructor (private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
   });;
  }
}
