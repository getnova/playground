import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconPlaygroundComponent} from './icon-playground.component';

describe('IconPlaygroundComponent', () => {
  let component: IconPlaygroundComponent;
  let fixture: ComponentFixture<IconPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconPlaygroundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
