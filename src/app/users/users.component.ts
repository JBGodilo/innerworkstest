import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userColumns: string[] = ['ID', 'First Name', 'Middle Name', 'Last Name']
  public users: User[];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
