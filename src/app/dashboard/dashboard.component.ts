import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




}

class grupo {
  
  votaciones:votacion[];

  constructor(votaciones:votacion[]) {
    this.votaciones = votaciones;
  }
}

class votacion {
  constructor() {
    
  }
}


class miembro {
  id:number;
  nombre_usuario:string;
  contraseña:string;
  grupos:grupo[];
  

  constructor(id:number, nombre_usuario:string, contraseña:string, grupos: grupo[] ) {
    this.id = id;
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.grupos = grupos;
  }
}
