import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: AppComponent, children:[
    {path: 'user', component: UserComponent}
  ]},
  { path: 'project', component: ProjectComponent, children:[
    {path: 'project', component: ProjectComponent}]},
  { path: 'task', component: TaskComponent, children:[
    {path: 'task', component: TaskComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserComponent,ProjectComponent,TaskComponent]
