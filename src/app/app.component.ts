import { Component, ViewChild, OnInit } from '@angular/core';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(PlaygroundComponent, { static: true })
  playground: PlaygroundComponent;

  title = 'ng-directives-demo';

  ngOnInit(): void {
    console.log('Parent queries the child', this.playground);
  }
}
