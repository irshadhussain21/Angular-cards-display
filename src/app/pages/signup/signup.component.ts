import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
 loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm=new FormGroup({
    email:new FormControl('',(Validators.required,Validators.email)),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/),
      Validators.pattern(/^\S*$/) // no spaces
    ])
      })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }
  constructor(private router: Router) { }
 
  //  navigateToAbout() {
  //   this.router.navigate(['/']);
 //}
onSubmit(){
  console.log(this.loginForm.value);
  this.router.navigate(['/login']);
}
get password() {
  return this.loginForm.get('password');
}
 
hasUpperCase() {
  return /[A-Z]/.test(this.password?.value);
}
 
hasNumber() {
  return /\d/.test(this.password?.value);
}
 
hasSpecialChar() {
  return /[@$!%*?&]/.test(this.password?.value);
}
 
hasNoSpaces() {
  return /^\S*$/.test(this.password?.value);
}
}