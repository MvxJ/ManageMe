import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInForm } from 'src/app/models/log-in.mode';
import { RegisterFormModel } from 'src/app/models/register-form.model';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  form!: FormGroup<LogInForm>;
  registerForm!: FormGroup<RegisterFormModel>
  errorMessage: string = '';
  loginForm: boolean = true;

  constructor(
    private readonly formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '', 
        [ 
          Validators.required, 
        ]
      ],
      password: [
        '', 
        [ 
          Validators.required, 
        ]
      ]
    })

    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
        ]
      ],
      surname: [
        '',
        [
          Validators.required,
        ]
      ],
      username: [
        '',
        [
          Validators.required,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ]
      ]
    });
  }

  changeForm() {
    this.loginForm = !this.loginForm;
  }

  async register() {
    
    const password = this.registerForm.get('password')?.value;;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;;

    if (confirmPassword != password) {
      this.errorMessage = "Please check your passwords."
    } else {
      const username = this.registerForm.get('username')?.value;
      const name = this.registerForm.get('name')?.value;
      const surname = this.registerForm.get('surname')?.value;

      if (password && username && name && surname) {
        const user: UserModel = {
          id: '',
          name: name,
          surname: surname,
          username: username,
          password: password,
          role: 'Developer'
        }
  
        const response = await this.userService.addUser(user)
        this.loginForm = true;
      }
    }
  }

  async logIn() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    
    if (username && password) {
      this.userService.findUser(username, password).subscribe(
        users => {
          if (users.length > 0) {
            const user = users[0];
            localStorage.setItem("user", JSON.stringify(user));
            this.authService.setUserLoggedIn(true);
            this.router.navigateByUrl('/');
          } else {
            this.errorMessage = "Invalid creditentials.";
          }
        },
        error => {
          this.errorMessage = "There was an error try again later.";
          console.error("Error fetching user:", error);
        }
      );
    }
  
  }
}
