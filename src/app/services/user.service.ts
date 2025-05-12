import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Santiago Molano',
      age: 22,
      email: 'santiago.molano@example.com',
      isActive: true,
    },
    {
      id: 2,
      name: 'Kevin Quintana',
      age: 26,
      email: 'kevin.quintana@example.com',
      isActive: true,
    },
    {
      id: 3,
      name: 'Diego Cardenas',
      age: 23,
      email: 'diego.cardenas@example.com',
      isActive: false,
    }
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
