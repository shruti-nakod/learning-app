import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get style(): object {
    return {
      color: 'blue',
      'text-decoration': 'underline',
      'font-size': '40px'
    };
  }
}
