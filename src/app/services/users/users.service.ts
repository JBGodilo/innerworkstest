import { Injectable } from '@angular/core';
import { User } from '../../model/users'
import { Users } from '../../mock/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() : User[] {
    return Users;
  }
}
