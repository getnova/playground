import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaygroundEditorComponent} from './playground-editor.component';

describe('PlaygroundEditorComponent', () => {
  let component: PlaygroundEditorComponent;
  let fixture: ComponentFixture<PlaygroundEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
