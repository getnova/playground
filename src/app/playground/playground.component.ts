import {Component} from '@angular/core';
import {PlaygroundService} from './playground.service';
import {Playground} from './interfaces/playground';
import {WebSocketService} from '../_core/web-socket/web-socket.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  playground: Playground;

  constructor(
    private playgroundService: PlaygroundService,
    private webSocketService: WebSocketService) {

    this.playground = this.playgroundService.playground;
    this.connect();
    this.playgroundService.playgroundUpdate.subscribe(playground => {
      this.playground = playground;
      this.connect();
    });
  }

  private connect(): void {
    if (this.playground.apiUrl) {
      this.webSocketService.connect(this.playground.apiUrl);
    }
  }
}
