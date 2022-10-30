import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles : [`
    .highlight {
       border: 2px solid red;
     background-color: yellow;
     text-align: center;
     margin-bottom: 20px;
     }
     `
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
