import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, opcion } from '../data.service';
@Component({
  selector: 'app-voto',
  templateUrl: './voto.component.html',
  styleUrls: ['./voto.component.scss'],
  providers: [DataService]
})


export class VotoComponent implements OnInit {

  votacionActual: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
  ) { }

  id: number = 0;
  pregunta: number = 0;
  votacionTerminada: boolean = false;


  ngOnInit(): void {
    this.getId();
    this.queryInformation();
  }

  getId() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
  }

  queryInformation() {
    this.votacionActual = this.data.votacion_por_id(this.id)!;
    console.log(this.votacionActual);
  }

  getOpciones() {
    return this.votacionActual.preguntas[this.pregunta].opciones;
  }

  siguientePregunta() {
    if (this.pregunta + 1 == this.getNumeroTotalPreguntas()) {
      this.votacionTerminada = true;
    } else {
      this.pregunta++;
    }
  }

  getPreguntas() {
    return this.votacionActual.preguntas
  }


  getNumeroPregunta() {
    return this.pregunta
  }


  getNumeroTotalPreguntas() {
    return this.votacionActual.preguntas.length;
  }

  getTituloPregunta() {
    return this.votacionActual.preguntas[this.pregunta].enunciado;
  }

  getTitle() {


  }

  getTotalVotos(pregunta: number) :number {
    let resultado = this.votacionActual.preguntas[pregunta].opciones.reduce((sum: number, current: opcion) => sum + current.votos);
    console.log(resultado)
    return resultado
  }


}
