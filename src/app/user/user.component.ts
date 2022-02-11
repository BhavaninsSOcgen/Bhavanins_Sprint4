import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

users: any
constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.userService.getUser().subscribe(
      data => {
        this.users = data;
      }
    )
  }

}