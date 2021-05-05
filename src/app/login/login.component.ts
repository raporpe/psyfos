import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor() {

  }


  ngOnInit(): void {
  }

  checkForm() {



  }

  validateMail(): boolean {
    return this.email.length > 1;
  }

  validatePassword(): boolean {
    return this.password.length > 8;
  }



}
