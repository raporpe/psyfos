import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarios: usuario[];
  grupos: grupo[];
  votaciones: votacion[]

  constructor() {

    this.usuarios = [new usuario(0, 'Francisco Ruiz','ruiz@gmail.com', 'asdf', []),
    new usuario(1, 'Elena Ortiz', 'asdf','ruiz@gmail.com', []),
    new usuario(2, 'Alfonso Ramos', 'asdf','ruiz@gmail.com', [])
    ]

    this.grupos = [new grupo(0, 'Vecinos Ribaseca', '¡Buenas! En este grupo estamos dispuestos a debatir de forma democrática y con respeto.', [], [], []),
    new grupo(1, 'CD Arroyomolinos', '¡Buenas! Jugamos para ganar, respetando siempre los valores del deporte.', [], [], []),
    new grupo(2, 'Familia Ruiz', 'Grupo de la familia Ruiz', [], [], [])
    ]

    this.votaciones = [new votacion(0, "Construcción Piscina", true, this.usuarios, [new pregunta("¿Quiere que se construya una piscina en la comunidad ? ", ['Sí', 'No']),
    new pregunta("¿Qué rango de precios está dispuesto a gastarse? ", ['>500€', '<500€']),
    new pregunta("¿Desearía poner césped en la piscina? ", ['Sí', 'No'])
    ]),
    new votacion(1, "Renovación caldera", true, this.usuarios, [new pregunta("¿Cómo de importante considera que es renovar la caldera?", ['1', '2', '3', '4', '5']),
    new pregunta("¿Ha experimentado algún problema con la calefacción?", ['Sí, todos los días', 'A veces', 'Casi nunca', 'Nunca']),
    new pregunta("¿Su vivienda tiene problemas de aislamiento?", ['Sí', 'No'])])
    ]

    this.grupos[0].añadir_votacion(this.votaciones[0]);
    this.grupos[0].añadir_votacion(this.votaciones[1]);

    // asignando miembros a los grupos
    for (var i = 0; i < this.grupos.length; i++) {
      for (var j = 0; j < this.grupos.length - i; j++) {
        this.grupos[i].añadir_miembro(this.usuarios[j])
      }
    }

    for (var grupo_index = 0; grupo_index < this.grupos.length; grupo_index++) {
      this.usuarios[0].añadir_grupo(this.grupos[grupo_index]);



    }




  }


  votacion_por_id(id: number): votacion | undefined {
    return this.votaciones.find(x => x.id == id)
  }

  registrarUsuario(nuevoUsuario:usuario){
    
    this.usuarios.push(nuevoUsuario)
  }

  getGrupos(): grupo[] | undefined {
    return this.grupos

  }

  getUsuarios(): usuario[] | undefined {
    return this.usuarios;
  }

  getVotaciones(): votacion[] | undefined {
    return this.votaciones;
  }
}




export class usuario {
  id: number;
  nombre_usuario: string;
  contraseña: string;
  email: string;
  foto_perfil: string;
  grupos: grupo[];

  constructor(id: number,nombre_usuario: string, email: string, contraseña:string , grupos: grupo[], foto_perfil: string = "assets/foto_perfil_defecto.png") {
    this.id = id;
    this.nombre_usuario = nombre_usuario;
    this.email = email;
    this.contraseña = contraseña;
    this.foto_perfil = foto_perfil;
    this.grupos = grupos;
  }

  public añadir_grupo(nuevo_grupo: grupo) {
    this.grupos.push(nuevo_grupo);
  }
}


export class grupo {
  id: number;
  nombre: string;
  descripcion: string;
  votaciones: votacion[];
  usuarios: usuario[];
  administradores: usuario[];

  constructor(id: number, nombre: string, descripcion: string, votaciones: votacion[], usuarios: usuario[], administradores: usuario[]) {
    this.id = id;
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

export class votacion {
  id: number;
  titulo: string;
  estado: boolean;
  participantes: usuario[];
  preguntas: pregunta[];

  constructor(id: number, titulo: string, estado: boolean, participantes: usuario[], preguntas: pregunta[]) {
    this.id = id;
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

export class pregunta {
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