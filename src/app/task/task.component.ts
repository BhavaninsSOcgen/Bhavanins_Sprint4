import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any
constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.getTask();
  }
  getTask(){
    this.taskService.getTask().subscribe(
      data => {
        this.tasks = data;
      }
    )
  }
}
