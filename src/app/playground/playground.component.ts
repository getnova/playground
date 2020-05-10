import {Component} from '@angular/core';
import {PlaygroundService} from './playground.service';
import {Playground} from './interfaces/playground';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  playground: Playground;

  constructor(private playgroundService: PlaygroundService) {
    this.playground = this.playgroundService.playground;
    this.playgroundService.playgroundUpdate.subscribe(playground => this.playground = playground);
  }
}
