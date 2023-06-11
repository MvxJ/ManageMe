import { Component, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-feature',
  templateUrl: './user-feature.component.html',
  styleUrls: ['./user-feature.component.scss']
})
export class UserFeatureComponent {
  @Input() user: UserModel = {
    id: '',
    name: '',
    password: '',
    role: '',
    surname: '',
    username: ''
  }
}
