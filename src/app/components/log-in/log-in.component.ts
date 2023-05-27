import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInForm } from 'src/app/models/log-in.mode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  form!: FormGroup<LogInForm>
  errorMessage: string = '';

  constructor(
    private readonly formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router
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
