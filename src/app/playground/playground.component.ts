import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('para', { static: true }) pElement: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log('<p>', this.pElement);
  }
}
