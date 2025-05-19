import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '**', redirectTo: '/home' }, // Catch-all route for any unmatched routes
];
