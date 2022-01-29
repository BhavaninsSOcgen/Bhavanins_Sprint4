import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  projects= [
    { id: 1, Name:'abcd', Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 2, Name:'abcd', Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 3, Name:'abcd', Detail:'abcd',CreatedOn: '2022-01-29' },
    { id: 4, Name:'abcd', Detail:'abcd',CreatedOn: '2022-01-29' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
