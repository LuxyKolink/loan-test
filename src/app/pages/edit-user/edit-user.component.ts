import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  user: User | null = null;
  id: number | null = null;

  constructor(
    private dataService: UserService,
    private route: ActivatedRoute
  ) { 
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id; // Convert string to number
      this.user = this.dataService.getUserById(this.id) ?? null;
    }
  }
}
