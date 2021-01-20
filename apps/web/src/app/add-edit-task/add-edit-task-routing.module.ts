import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditTaskComponent } from './add-edit-task.component';

const routes: Routes = [{ path: '', component: AddEditTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditTaskRoutingModule { }
