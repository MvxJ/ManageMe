import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  constructor (
    private usersSerice: UserService,
    private router: Router
  ) {}

  @Input() user: UserModel = {
    id: '',
    name: '',
    password: '',
    role: '',
    surname: '',
    username: ''
  };

  infoIcon = faCircleInfo;
  editIcon = faEdit;
  deleteIcon = faTrash;

  deleteUser() {
    if (this.user) {
      this.usersSerice.deleteUser(this.user);
      this.router.navigateByUrl('/users');
    }
  }
}
