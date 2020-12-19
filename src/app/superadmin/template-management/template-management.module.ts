import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListTemplateComponent } from './check-list-template/check-list-template.component';
import { CheckListTemplateItemComponent } from './check-list-template-item/check-list-template-item.component';
import { CheckStatusTemplateComponent } from './check-status-template/check-status-template.component';
import { CleanStatusTemplateComponent } from './clean-status-template/clean-status-template.component';
import { RoomStatusTemplateComponent } from './room-status-template/room-status-template.component';
import { RoomTypeTemplateComponent } from './room-type-template/room-type-template.component';
import { CheckListTemplateDefaultComponent } from './check-list-template-default/check-list-template-default.component';
import { CheckListTemplateDefaultItemComponent } from './check-list-template-default-item/check-list-template-default-item.component';
import { TablePropertiesComponent } from './table-properties/table-properties.component';
import { TemplateManagementRoutingModule } from './template-management-routing.module';
 
@NgModule({
  declarations: [CheckListTemplateComponent, CheckListTemplateItemComponent, CheckStatusTemplateComponent, CleanStatusTemplateComponent, RoomStatusTemplateComponent, RoomTypeTemplateComponent, CheckListTemplateDefaultComponent, CheckListTemplateDefaultItemComponent, TablePropertiesComponent],
  imports: [
    CommonModule,
    TemplateManagementRoutingModule
  ]
})
export class TemplateManagementModule { }
