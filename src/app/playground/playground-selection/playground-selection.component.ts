import {Component, EventEmitter, Output} from '@angular/core';
import {Endpoint} from '../interfaces/endpoint';
import {PlaygroundService} from '../playground.service';
import {Playground} from '../interfaces/playground';

@Component({
  selector: 'app-playground-selection',
  templateUrl: './playground-selection.component.html',
  styleUrls: ['./playground-selection.component.scss']
})
export class PlaygroundSelectionComponent {

  @Output()
  selectEndpoint: EventEmitter<{ collection: string, endpoint: Endpoint }> = new EventEmitter<{ collection: string, endpoint: Endpoint }>();

  playground: Playground;

  constructor(private playgroundService: PlaygroundService) {
    this.playground = this.playgroundService.playground;
    this.playgroundService.playgroundUpdate.subscribe(playground => this.playground = playground);
  }
}
