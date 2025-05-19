import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title: string = 'Loan Management';
  links: { name: string; path: string }[] = [
    { name: 'Users', path: '/users' },
    { name: 'Contact', path: '/contact' },
  ]
}
