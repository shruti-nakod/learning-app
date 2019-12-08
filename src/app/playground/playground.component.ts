import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cities = [
    'Bengaluru',
    'Mumbai',
    'Chennai',
    'Hyderabad',
    'New Delhi',
    'Pune',
    'Mysuru'
  ];

  constructor() {}

  ngOnInit() {}
}
