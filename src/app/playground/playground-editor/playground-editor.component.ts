import {Component, Input} from '@angular/core';
import {Endpoint} from '../interfaces/endpoint';

@Component({
  selector: 'app-playground-editor',
  templateUrl: './playground-editor.component.html',
  styleUrls: ['./playground-editor.component.scss']
})
export class PlaygroundEditorComponent {

  @Input()
  endpointCollection: string;

  @Input()
  endpoint: Endpoint;
}
