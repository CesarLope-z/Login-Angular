import { Component } from '@angular/core';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MenusComponent } from '../share/menus/menus.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isRegister = false

  activeForm2 = new FormGroup({
    name: new FormControl('', Validators.required),
    edad: new FormControl('', [Validators.min(1), Validators.required ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8) ])
  })

  constructor(private userService: UserService) {}

  submitLogin2(){
    if (this.activeForm2.valid) {
      const formValue = this.activeForm2.value;
      const userData = {
        name: formValue.name as string,
        edad: Number(formValue.edad),
        email: formValue.email as string,
        password: formValue.password as string,
        credential: Date.now()
      };
      console.log(userData);

      this.userService.registerUser(userData).subscribe({
        next: (res) => {
          console.log('Usuario registrado con éxito:', res);
          this.isRegister = true;
          this.activeForm2.reset();
          // Aquí podrías redireccionar o mostrar un mensaje
        },
        error: (err) => {
          console.error('Error al registrar usuario:', err);
        }
      });
    }
    
  }

}
