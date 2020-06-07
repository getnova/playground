import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundSelectionComponent} from './playground-selection.component';

describe('PlaygroundSelectionComponent', () => {
  let component: PlaygroundSelectionComponent;
  let fixture: ComponentFixture<PlaygroundSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundSelectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
