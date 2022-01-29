import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  
  tasks= [
    { id: 1, ProjectId: '1', Status :'ok',AssignedToUserId: 'Mark', Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 2, ProjectId: '2', Status :'ok',AssignedToUserId: 'Paul',  Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 3, ProjectId: '3', Status :'ok',AssignedToUserId: 'Watson',  Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 4, ProjectId: '4', Status :'ok',AssignedToUserId: 'John',  Detail:'abcd',CreatedOn: '2022-01-29' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
