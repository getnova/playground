import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundSelectionItemComponent} from './playground-selection-item.component';

describe('PlaygroundSelectionItemComponent', () => {
  let component: PlaygroundSelectionItemComponent;
  let fixture: ComponentFixture<PlaygroundSelectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundSelectionItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
