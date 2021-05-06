import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  providers: [DataService]
})
export class AppLayoutComponent implements OnInit {
  constructor(private data: DataService) { }
  show: boolean=true
  ngOnInit(): void {
    this.show = this.data.getShowButton();
  }

}
