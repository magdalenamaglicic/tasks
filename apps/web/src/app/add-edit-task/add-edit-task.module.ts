import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditTaskRoutingModule } from './add-edit-task-routing.module';
import { AddEditTaskComponent } from './add-edit-task.component';


@NgModule({
  declarations: [AddEditTaskComponent],
  imports: [
    CommonModule,
    AddEditTaskRoutingModule
  ]
})
export class AddEditTaskModule { }
