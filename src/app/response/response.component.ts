import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WebSocketService} from '../_core/web-socket.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent {

  @Input() format: string;

  history: FormControl;
  data: any;

  constructor(private websocketService: WebSocketService) {
    this.history = new FormControl({value: '', disabled: true});
    this.websocketService.response.subscribe(data => {
      if (this.format === 'json') {
        this.data = JSON.parse(data);
      } else {
        this.data = data;
      }
    });
  }
}
