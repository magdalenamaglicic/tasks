import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { TaskDetailModule } from './task-detail/task-detail.module';
import { AddEditTaskModule } from './add-edit-task/add-edit-task.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TasksModule, TaskDetailModule, AddEditTaskModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
