import { Component } from '@angular/core';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menus',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {
  constructor(private router: Router){}
  logOut() {
    localStorage.removeItem('token'); // elimina el token
    localStorage.removeItem('name'); // elimina el token
    window.location.reload();
    // this.router.navigate(['/']); // redirige al login
  }}
