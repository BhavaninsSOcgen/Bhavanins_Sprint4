import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { UserModule } from '../user/user.module';
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
  
  ],
  exports : [
    ProjectComponent,
    
  ]
})
export class ProjectModule { }
