import { Injectable } from '@angular/core';
import { AddUserQuery, CountryCodeType, User } from '../models/user.model';
import { v4 as idGenerator } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      id: 'jhfgh23892398',
      name: 'Keča',
      surname: 'Ugabuga',
      country: CountryCodeType.LV
    }
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(query: AddUserQuery): User[] {
    const newUser = {
      id: idGenerator(),
      ...query
    }

    this.users.push(newUser);
    return this.users;
  }
}
