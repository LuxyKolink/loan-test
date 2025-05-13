import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { AddButtonComponent } from "../../components/add-button/add-button.component";

@Component({
  selector: 'app-users',
  imports: [UserListComponent, AddButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
