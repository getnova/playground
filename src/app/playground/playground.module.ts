import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from './playground.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../_core/core.module';

@NgModule({
  declarations: [PlaygroundComponent],
  exports: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class PlaygroundModule {
}
