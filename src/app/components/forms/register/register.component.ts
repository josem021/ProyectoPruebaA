import { CommonModule, NgIfContext } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    confirmarCorreo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('', Validators.required)
  });

  showEmailInput = false;
  showConfirmEmail = false;
  showPassword = false;
  showUsername = false;
  showRegisterButton = false;
  disableContinueButton = false;
  initialLoad: TemplateRef<NgIfContext<boolean>> | null | undefined;

  ngOnInit() {
    setTimeout(() => {
      const emailInput = document.getElementById('emailInput');
      if (emailInput) {
        emailInput.classList.remove('hidden');
        emailInput.classList.add('show');
      }
    }, 3000);
  }
  

  constructor(private cd: ChangeDetectorRef) {}

  continueToConfirmEmail() {
    const correoControl = this.registrationForm.get('correoElectronico');
    console.log('continueToConfirmEmail called', correoControl?.value);
    if (correoControl && correoControl.valid) {
      this.disableContinueButton = true;
      setTimeout(() => {
        this.showConfirmEmail = true;
        console.log('showConfirmEmail should be true now', this.showConfirmEmail);
        this.cd.detectChanges();
      }, 2000);
    }
  }

  onEmailChange() {
    const correoControl = this.registrationForm.get('correoElectronico');
    if (correoControl && correoControl.valid) {
      this.showConfirmEmail = true;
      this.cd.detectChanges();
    } else {
      this.showConfirmEmail = false;
    }
  }

  continueToPassword() {
    const confirmarCorreoControl = this.registrationForm.get('confirmarCorreo');
    const correoControl = this.registrationForm.get('correoElectronico');
    if (confirmarCorreoControl && correoControl && confirmarCorreoControl.value === correoControl.value) {
      setTimeout(() => {
        this.showPassword = true;
      }, 2000);
    }
  }

  onConfirmEmailChange() {
    const confirmarCorreoControl = this.registrationForm.get('confirmarCorreo');
    const correoControl = this.registrationForm.get('correoElectronico');
    if (confirmarCorreoControl && correoControl && confirmarCorreoControl.value === correoControl.value) {
      this.showPassword = true;
      this.cd.detectChanges();
    } else {
      this.showPassword = false;
    }
  }
  

  continueToUsername() {
    const passwordControl = this.registrationForm.get('password');
    if (passwordControl && passwordControl.valid) {
      setTimeout(() => {
        this.showUsername = true;
      }, 2000);
    }
  }

  onPasswordChange() {
    const passwordControl = this.registrationForm.get('password');
    if (passwordControl && passwordControl.valid) {
      this.showUsername = true;
      this.cd.detectChanges(); 
    } else {
      this.showUsername = false;
    }
  }

  continueToRegister() {
    if (this.registrationForm.valid) {
      this.showRegisterButton = true;
      this.cd.detectChanges();
    } else {
      this.showRegisterButton = false;
    }
  }

  clickRegister() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
  onUsernameChange() {
    const usernameControl = this.registrationForm.get('username');
    if (usernameControl && usernameControl.valid) {
      this.showRegisterButton = true;
    } else {
      this.showRegisterButton = false;
    }
    this.cd.detectChanges();
  }
  
}