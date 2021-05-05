import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmail: string = "";
  loginPassword: string = "";

  registerName: string = "";
  registerEmail: string = "";
  registerPassword: string = "";

  constructor() {

  }


  ngOnInit(): void {
  }

  checkForm() {



  }

  validateLoginEmail(): boolean {
    return this.loginEmail.length > 1;
  }

  validateLoginPassword(): boolean {
    return this.loginPassword.length > 8;
  }


  validateRegisterName(): boolean {
    return this.registerName.length > 8;
  }

  validateRegisterEmail(): boolean {
    return this.registerEmail.length > 8;
  }

  validateRegisterPassword(): boolean {
    return this.registerPassword.length > 8;
  }
}
