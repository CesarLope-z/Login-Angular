import { Component } from '@angular/core';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatMenuModule, MatMenu } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MenusComponent } from '../share/menus/menus.component';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, MenusComponent, FooterComponent, ReactiveFormsModule, MatMenuModule, MatButtonModule, MatIconModule],
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

  submitLogin2(){
    this.isRegister = true
    console.log(this.activeForm2.value)
    
  }

}
