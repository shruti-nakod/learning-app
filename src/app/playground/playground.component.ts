import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  predicate = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.predicate = true;
    }, 5000);
  }
}
