import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() grupo:any;
}
