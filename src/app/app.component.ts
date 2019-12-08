import {
  Component,
  ViewChild,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(PlaygroundComponent)
  playgroundList: QueryList<PlaygroundComponent>;

  title = 'ng-directives-demo';

  ngAfterViewInit(): void {
    console.log(
      'Parent queries ang gets the children as a list',
      this.playgroundList
    );

    this.playgroundList.forEach((p, i) => {
      console.log(`Iterating over queried children at ${i}`, p);
    });
  }
}
