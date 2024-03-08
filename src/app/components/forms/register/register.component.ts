import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm = new FormGroup({
    correoElectronico: new FormControl ('',[Validators.required, Validators.email]),
    confirmarCorreo: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    username: new FormControl('',Validators.required)
  });

  clickRegister(dateRegister: any){
    if (this.registrationForm.valid) {
      console.log(dateRegister);
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }

  animationRegister() {
    
  }
}
