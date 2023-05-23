import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  constructor(
    private route: ActivatedRoute, 
    private usersSerice: UserService,
    private router: Router
  ) {}
  users: any
  key: string|null = null;
  user: UserModel ={
    id: '',
    name: '',
    password: '',
    role: '',
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
    const id = this.route.snapshot.paramMap.get('id')
    const users = this.usersSerice.getUsers().subscribe(users => {
      const result = users.filter(user => user.id == id)
      this.user = result[0];
    })    
  }

  toggleVisiblity() {
    this.showPassword = !this.showPassword;
    this.inputPasswordType = this.showPassword ? 'text' : 'password';
  }

  deleteUser() {
    if (this.user) {
      this.usersSerice.deleteUser(this.user);
      this.router.navigateByUrl('/users');
    }
  }
}
