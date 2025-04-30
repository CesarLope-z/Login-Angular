import { Component } from '@angular/core';
import { FooterComponent } from '../share/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { routes } from '../app.routes';


@Component({
  selector: 'app-login',
  imports: [FooterComponent, RouterLink, CommonModule,  ReactiveFormsModule],
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
