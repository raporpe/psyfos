import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit {

  usuarios: object[];
  grupos: object[];
  grupoSeleccionado = 0
  cambiarGrupoSelecionado(newGroup: number) {
    this.grupoSeleccionado = newGroup;
  }

  // private route: ActivatedRoute;

  constructor(private data: DataService
  ) {

    this.usuarios = []
    this.grupos = []
    this.queryInformation();

  }

  ngOnInit(): void {
    this.data.setShowButton(true);
  }

  queryInformation() {
    this.usuarios = this.data.getUsuarios()!;
    this.grupos = this.data.getGrupos()!;

  }

}

