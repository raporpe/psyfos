import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}


class usuario {
  id: number;
  nombre_usuario: string;
  contraseña: string;
  foto_perfil: string;
  grupos: grupo[];


  constructor(id: number, nombre_usuario: string, contraseña: string, grupos: grupo[], foto_perfil: string = "assets/foto_perfil_defecto.png") {
    this.id = id
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.foto_perfil = foto_perfil;
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