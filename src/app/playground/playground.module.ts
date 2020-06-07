import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from './playground.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../_core/core.module';
import {PlaygroundEndpointCollectionComponent} from './playground-endpoint-collection/playground-endpoint-collection.component';
import {PlaygroundEndpointComponent} from './playground-endpoint/playground-endpoint.component';
import {PlaygroundEndpointParameterComponent} from './playground-endpoint-parameter/playground-endpoint-parameter.component';
import {PlaygroundEditorComponent} from './playground-editor/playground-editor.component';
import {PlaygroundSelectionComponent} from './playground-selection/playground-selection.component';
import {PlaygroundSelectionItemComponent} from './playground-selection/playground-selection-item/playground-selection-item.component';

@NgModule({
  declarations: [PlaygroundComponent, PlaygroundEndpointCollectionComponent, PlaygroundEndpointComponent, PlaygroundEndpointParameterComponent, PlaygroundEditorComponent, PlaygroundSelectionComponent, PlaygroundSelectionItemComponent],
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
