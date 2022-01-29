import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { TaskModule } from '../task/task.module';
import { ProjectModule } from '../project/project.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
    ProjectModule
    
  ],
  exports : [
    UserComponent,
   
  ]
})
export class UserModule { }
