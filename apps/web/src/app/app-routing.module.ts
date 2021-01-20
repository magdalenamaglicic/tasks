import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'task/:id', loadChildren: () => import('./task-detail/task-detail.module').then(m => m.TaskDetailModule) },
  { path: 'task/add', loadChildren: () => import('./add-edit-task/add-edit-task.module').then(m => m.AddEditTaskModule) },
  { path: 'task/:id/edit', loadChildren: () => import('./add-edit-task/add-edit-task.module').then(m => m.AddEditTaskModule) },
  { path: '**', redirectTo: 'tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
