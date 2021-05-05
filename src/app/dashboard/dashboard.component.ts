import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarios: usuario[];
  grupos: grupo[];
  constructor() {

    this.usuarios = [new usuario(0, 'Francisco Ruiz', 'asdf', []),
    new usuario(0, 'Elena Ortiz', 'asdf', []),
    new usuario(0, 'Alfonso Ramos', 'asdf', [])
    ]

    this.grupos = []

  }

  ngOnInit(): void {
  }





}

class usuario {
  id: number;
  nombre_usuario: string;
  contraseña: string;
  grupos: grupo[];


  constructor(id: number, nombre_usuario: string, contraseña: string, grupos: grupo[]) {
    this.id = id;
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.grupos = grupos;
  }
}


class grupo {

  votaciones: votacion[];
  usuarios: usuario[];
  administradores: usuario[];

  constructor(votaciones: votacion[], usuarios: usuario[], administradores: usuario[]) {
    this.votaciones = votaciones;
    this.usuarios = usuarios;
    this.administradores = administradores;
  }
  public añadir_miembro(nuevo_usuario: usuario) {
    this.usuarios.push(nuevo_usuario);
  }
  public añadir_votacion(nueva_votacion: votacion) {
    this.votaciones.push(nueva_votacion);
  }
}

class votacion {
  titulo: string;
  estado: boolean;
  participantes: usuario[];
  preguntas: pregunta[];

  constructor(titulo: string, estado: boolean, participantes: usuario[], preguntas: pregunta[]) {
    this.titulo = titulo;
    this.estado = estado;
    this.participantes = participantes;
    this.preguntas = preguntas;
  }
  public añadir_pregunta(nueva_pregunta: pregunta) {
    this.preguntas.push(nueva_pregunta);
  }
  public añadir_usuario(nuevo_usuario: usuario) {
    this.participantes.push(nuevo_usuario);
  }
}

class pregunta {
  enunciado: string;
  opciones: opcion[];
  constructor(enunciado: string, choices: string[]) {
    //Se podría pedir array de string y formar opciones con el constructor
    this.enunciado = enunciado;
    this.opciones = [];
    choices.forEach((element) => {
      this.opciones.push(new opcion(element))
    })
  }
  public añadir_opcion(nueva_opcion: opcion) {
    this.opciones.push(nueva_opcion);
  }

}
class opcion {
  enunciado: string;
  votos: number;
  constructor(enunciado: string) {
    this.enunciado = enunciado;
    this.votos = 0;
  }
  public aumentar_voto() {
    this.votos += 1;
  }
}

