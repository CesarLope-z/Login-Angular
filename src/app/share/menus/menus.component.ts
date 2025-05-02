import { Component } from '@angular/core';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menus',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {
  
}
