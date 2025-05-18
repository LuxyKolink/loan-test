import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
    userForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      name: this.fb.control<string | null>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string | null>('', [Validators.required, Validators.email]),
      age: this.fb.control<number | null>(null, [Validators.min(0), Validators.max(120)]),
      isActive: this.fb.control<boolean>(true)
    });
  }
  
  onSubmit(): void {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      
      const user: User = {
        id: 0,
        name: formValues.name,
        email: formValues.email,
        age: formValues.age,
        isActive: formValues.isActive
      };
      
      this.userService.addUser(user);
      this.router.navigate(['/users']);
    }
  }
}
