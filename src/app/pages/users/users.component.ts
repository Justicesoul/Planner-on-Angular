import { Component, OnInit } from '@angular/core';
import { AddUserQuery, User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users?: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  addUser(query: AddUserQuery): void {
    this.users = this.usersService.addUser(query);
  }
}
