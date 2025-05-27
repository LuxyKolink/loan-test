import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() user!: User;
}
