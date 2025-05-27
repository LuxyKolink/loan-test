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
      loan: [
        {
          id: 1,
          amount: 10000,
          interestRate: 0.5,
          term: 12,
          startDate: new Date('2023-01-01'),
          endDate: new Date('2024-01-01'),
          status: 'approved'
        },
        {
          id: 2,
          amount: 5000,
          interestRate: 0.4,
          term: 6,
          startDate: new Date('2023-06-01'),
          endDate: new Date('2023-12-01'),
          status: 'pending'
        }
      ]
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
      loan: [
        {
          id: 3,
          amount: 15000,
          interestRate: 0.35,
          term: 24,
          startDate: new Date('2022-05-01'),
          endDate: new Date('2024-05-01'),
          status: 'paid'
        }
      ]
    }
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | null {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      console.error(`User with id ${id} not found.`);
      return null;
    }
    return {...user};
  }

  addUser(user: User): void {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    } else {
      console.error(`User with id ${user.id} not found for update.`);
    }
  }
}
