import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { UserModule } from '../user/user.module';
import { ProjectModule } from '../project/project.module';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ProjectModule
   
  ],
  exports : [
    TaskComponent,
    
  ]
})
export class TaskModule { }
