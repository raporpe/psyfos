import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService, usuario } from '../data.service';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {

  loginEmail: string = "";
  loginPassword: string = "";

  registerName: string = "";
  registerEmail: string = "";
  registerPassword: string = "";
  usuarios: usuario[];

  errorLogin = false;
  errorRegister = false;
  confirmarRegistro = false;

  constructor(private data: DataService, private router: Router) {
    this.usuarios = []
    this.queryInformation();
  }

  ngOnInit(): void {

  }


  makeLogin() {

    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if (this.loginEmail != "" && this.loginPassword != "" &&
      this.loginEmail == email && this.loginPassword == password &&
      this.validateLoginEmail && this.validateLoginPassword) {

      this.router.navigate(['/dashboard']);
      this.errorLogin = false;


    } else {
      this.errorLogin = true;
    }

  }

  makeRegister() {

    if (this.validateRegisterEmail() && this.validateRegisterName() && this.validateRegisterPassword()) {
      this.errorRegister = false;

      localStorage.setItem('name', this.registerName);
      localStorage.setItem('email', this.registerEmail);
      localStorage.setItem('password', this.registerPassword);

      this.confirmarRegistro = true;

    } else {
      this.errorRegister = true;
    }

    this.queryInformation();

  }

  encuentraUsuario(email: string, contraseña: string): usuario | undefined {
    console.log(this.usuarios)
    for (var usuario of this.usuarios) {
      if (usuario.email === email && usuario.contraseña === contraseña) {
        return usuario;

      }
    }
    return undefined;
  }


  queryInformation() {
    this.usuarios = this.data.getUsuarios()!;
  }



  validateLoginEmail(): boolean {
    var regexp = new RegExp("^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$");
    var email = regexp.test(this.loginEmail);
    return email;
  }

  validateLoginPassword(): boolean {
    return this.loginPassword.length > 8;
  }


  validateRegisterName(): boolean {
    return this.registerName.length > 1;
  }

  validateRegisterEmail(): boolean {
    var regexp = new RegExp("^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$");
    var email = regexp.test(this.registerEmail);
    return email;
  }

  validateRegisterPassword(): boolean {
    return this.registerPassword.length > 8;
  }



}
