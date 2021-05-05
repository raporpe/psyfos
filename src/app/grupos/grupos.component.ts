import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  grupoSeleccionado = 0
  @Output()
  sendGroup = new EventEmitter<number>();



  @Input()
  grupos: any;

  sendSelectedGroup(selectedGroup: number) {
    this.grupoSeleccionado = selectedGroup;
    this.sendGroup.emit(selectedGroup);
  }
}
