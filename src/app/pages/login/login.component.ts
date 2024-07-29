import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  // imports: [FormsModule],
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  // loginEvent(){
    
  //   this.router.navigate(['/']);
  // }
  // onSubmit(form:NgForm){
  //   console.log(form.value);

  // }

  loginForm!:FormGroup

    ngOnInit(){
      this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      })
    }


  onSubmit(){
    console.log(this.loginForm.value)
  }

  onClick(){
    this.router.navigate(['/signup']);
  }

}

