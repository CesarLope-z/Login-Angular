import { Component } from '@angular/core';
import { FooterComponent } from '../share/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { MenusComponent } from '../share/menus/menus.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


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
  constructor(private userService: UserService, private router: Router) {}

  submitLogin(){
    if(this.activeForm.valid){
      const loginData = this.activeForm.value;

      this.userService.loginUser(loginData as any).subscribe({
        next: (res) => {
          console.log('Usuario Inició sesion:', res);
          console.log(res.token)
          // Guarda el token si el backend lo devuelve
          localStorage.setItem('token', res.token);
          localStorage.setItem('name', res.nombre);
          // Redirige, por ejemplo, al home
          this.IsLogged = true;
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('error al registrar el usuario', err);
        },
      });
    }
    // alert(`
    //   ${this.activeForm.value.email} accedió
    //   `)
    this.activeForm.reset();
  }

}
