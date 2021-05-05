import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-voto',
  templateUrl: './voto.component.html',
  styleUrls: ['./voto.component.scss']
})
export class VotoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private data: DataService,
    // private votacion: object
  ) { }
  id: number = 0;


  ngOnInit(): void {

    // this.getId();
    // this.queryInformation();


  }

  getId() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
  }

  // queryInformation() {

  //   this.votacion = this.data.votacion_por_id(this.id);
  //   console.log(this.votacion);

  // }

  getTitle() {


  }


}
