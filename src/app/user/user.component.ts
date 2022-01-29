import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  headers = ["ID","FirstName", "LastName","Email"];

  rows = [
  {
    "ID" : 1,
    "FirstName" : "Rahul",
    "LastName" : "Sharma",
    "Email" : "abc@gmail.com"
  },
  {
    "ID" : 2,
    "FirstName" : "Rahul",
    "LastName" : "Sharma",
    "Email" : "abc@gmail.com"
  },
  {
    "ID" : 3,
    "FirstName" : "Rahul",
    "LastName" : "Sharma",
    "Email" : "abc@gmail.com"
  },
  {
    "ID" : 4,
    "FirstName" : "Rahul",
    "LastName" : "Sharma",
    "Email" : "abc@gmail.com"
  }
];

  
}

