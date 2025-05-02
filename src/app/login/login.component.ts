import { Component } from '@angular/core';
import { FooterComponent } from '../share/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { MenusComponent } from '../share/menus/menus.component';


@Component({
  selector: 'app-login',
  imports: [FooterComponent, MenusComponent, CommonModule,  ReactiveFormsModule, MatMenuModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  IsLogged = false;

  activeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  submitLogin(){
    this.IsLogged = true;
    // alert(`
    //   ${this.activeForm.value.email} accedió
    //   `)
    this.activeForm.reset();
  }

}
