import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  providers: [DataService]
})
export class AppLayoutComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {

    this.show = false;

    this.router.events.subscribe((event: Event) => {
      if (this.router.url === '/login') {
        this.show = false;
      } else {
        this.show = true;

      }
    })
  }
  show: boolean = false


  ngOnInit(): void {
    if (this.router.url === '/login') {
      this.show = false;
    } else {
      this.show = true;

    }
  }


}


