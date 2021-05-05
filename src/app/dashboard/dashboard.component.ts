import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
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
    new usuario(1, 'Elena Ortiz', 'asdf', []),
    new usuario(2, 'Alfonso Ramos', 'asdf', [])
    ]

    this.grupos = [new grupo('Vecinos Ribaseca', '¡Buenas! En este grupo estamos dispuestos a debatir de forma democrática y con respeto.', [], [], []),
    new grupo('CD Arroyomolinos', '¡Buenas! Jugamos para ganar, respetando siempre los valores del deporte.', [], [], []),
    new grupo('Familia Ruiz', 'Grupo de la familia Ruiz', [], [], [])
    ]

    var votaciones = [new votacion("Construcción Piscina", true, this.usuarios, [new pregunta("¿Quiere que se construya una piscina en la comuidad?", ['Sí', 'No'])]),
    new votacion("Importancia caldera", true, this.usuarios, [new pregunta("¿Cómo de importante considera que es renovar la caldera?", ['1', '2', '3', '4', '5'])])
    ]

    this.grupos[0].añadir_votacion(votaciones[0]);
    this.grupos[0].añadir_votacion(votaciones[1]);

    // asignando miembros a los grupos
    for (var i = 0; i < this.grupos.length; i++) {
      for (var j = 0; j < this.grupos.length - i; j++) {
        this.grupos[i].añadir_miembro(this.usuarios[j])
      }
    }

    

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
  public añadir_grupo(nuevo_grupo: grupo) {
    this.grupos.push(nuevo_grupo);
  }
}


class grupo {

  nombre: string;
  descripcion: string;
  votaciones: votacion[];
  usuarios: usuario[];
  administradores: usuario[];

  constructor(nombre: string, descripcion: string, votaciones: votacion[], usuarios: usuario[], administradores: usuario[]) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.votaciones = votaciones;
    this.usuarios = usuarios;
    this.administradores = administradores;
  }
  public añadir_miembro(nuevo_usuario: usuario) {
    this.usuarios.push(nuevo_usuario);
    nuevo_usuario.añadir_grupo(this);
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

