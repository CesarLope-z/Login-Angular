import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenusComponent } from '../menus/menus.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenusComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() margin: boolean = true;
  userName = localStorage.getItem('name');
}
