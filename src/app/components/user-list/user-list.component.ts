import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserItemComponent } from "../user-item/user-item.component";

@Component({
  selector: 'app-user-list',
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: User[] = [];
}
