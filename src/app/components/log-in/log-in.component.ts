import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInForm } from 'src/app/models/log-in.mode';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  form!: FormGroup<LogInForm>

  constructor(private readonly formBuilder: FormBuilder) {}

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

  logIn() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
  }
}
