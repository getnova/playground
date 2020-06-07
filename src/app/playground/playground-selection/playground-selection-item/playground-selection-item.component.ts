import {Component, EventEmitter, Input, Output} from '@angular/core';
import {collapse} from '../../../_core/_animations';

@Component({
  selector: 'app-playground-selection-item',
  templateUrl: './playground-selection-item.component.html',
  styleUrls: ['./playground-selection-item.component.scss'],
  animations: [collapse]
})
export class PlaygroundSelectionItemComponent {

  @Input()
  name: string;

  @Input()
  children: boolean;

  @Output()
  performedSelect = new EventEmitter<void>();

  expanded = false;
}
