import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: UserModel = {
    id: '',
    name: '',
    password: '',
    roles: [],
    surname: '',
    username: ''
  };

  infoIcon = faCircleInfo;
  editIcon = faEdit;
  deleteIcon = faTrash;
}
