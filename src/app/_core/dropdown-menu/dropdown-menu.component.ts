import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Output() currentItem: EventEmitter<string> = new EventEmitter<string>();
  @Input() items: Array<string>;
  @Input() name: string;
  title: string;
  selectedItem: string;

  opened = false;

  constructor() {
  }

  ngOnInit(): void {
    this.title = this.name;
  }

  click() {
    if (this.opened) {
      this.opened = false;
      if (this.selectedItem) {
        this.title = this.selectedItem;
      } else {
        this.title = this.name;
      }
    } else {
      this.opened = true;
      this.title = this.name;
    }
  }

  clickItem(item: string) {
    this.opened = false;
    this.currentItem.emit(item);
    this.title = item;
    this.selectedItem = item;
  }

}
