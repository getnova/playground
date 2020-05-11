import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormFieldComponent} from './form-field/form-field.component';
import {FormFieldRefDirective} from './form-field/form-field-ref.directive';
import {ButtonComponent} from './button/button.component';
import {IconConnectComponent} from './icons/icon-connect/icon-connect.component';
import {IconSendComponent} from './icons/icon-send/icon-send.component';
import {IconGithubComponent} from './icons/icon-github/icon-github.component';
import {JsonViewComponent} from './json-view/json-view.component';
import {IconArrowRightComponent} from './icons/icon-arrow-right/icon-arrow-right.component';
import {IconArrowDownComponent} from './icons/icon-arrow-down/icon-arrow-down.component';
import {IconCloseComponent} from './icons/icon-close/icon-close.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DropdownRefDirective} from './dropdown/dropdown-ref.directive';
import {IconJsonComponent} from './icons/icon-json/icon-json.component';
import {IconRawComponent} from './icons/icon-raw/icon-raw.component';
import {NotificationListComponent} from './notifications/notification-list/notification-list.component';
import {NotificationItemComponent} from './notifications/notification-item/notification-item.component';
import {HttpClientModule} from '@angular/common/http';
import {IconCopyComponent} from './icons/icon-copy/icon-copy.component';


@NgModule({
  declarations: [
    FormFieldComponent,
    FormFieldRefDirective,
    ButtonComponent,
    IconConnectComponent,
    IconSendComponent,
    IconGithubComponent,
    JsonViewComponent,
    IconArrowRightComponent,
    IconArrowDownComponent,
    IconCloseComponent,
    DropdownComponent,
    DropdownRefDirective,
    IconJsonComponent,
    IconRawComponent,
    NotificationListComponent,
    NotificationItemComponent,
    IconCopyComponent
  ],
  exports: [
    FormFieldComponent,
    IconGithubComponent,
    IconRawComponent,
    DropdownComponent,
    IconJsonComponent,
    DropdownRefDirective,
    JsonViewComponent,
    FormFieldRefDirective,
    ButtonComponent,
    IconConnectComponent,
    IconCloseComponent,
    IconSendComponent,
    NotificationListComponent,
    IconArrowRightComponent,
    IconCopyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule {
}
