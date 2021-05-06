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


  constructor(private data: DataService, private router: Router) {
    this.usuarios = []
    this.queryInformation();
  }

  ngOnInit(): void {
  }

  checkForm() {




  }

  makeLogin(data: any) {
    console.log(data)
    // alert("Entered Email id : " + data.loginEmailForm);
    // alert("Entered Email id : " + data.loginPasswordForm);
    var usuario = this.encuentraUsuario(data.loginEmailForm, data.loginPasswordForm);

    if (usuario !== undefined) {
      this.router.navigate(['/dashboard']);
    } else {

      alert('wrong credentials')
    }


  }

  makeRegister(data: any) {
    console.log(data);

    var nuevo_usuario: usuario = new usuario(0, data.registerNameForm, data.registerEmailForm, data.registerPasswordForm, []);
    this.data.registrarUsuario(nuevo_usuario);
    this.queryInformation();
    console.log(this.usuarios)
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


  validarLogin() {

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
    return this.registerName.length > 8;
  }

  validateRegisterEmail(): boolean {
    return this.registerEmail.length > 8;
  }

  validateRegisterPassword(): boolean {
    return this.registerPassword.length > 8;
  }



}
