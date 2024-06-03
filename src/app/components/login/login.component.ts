import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  imagePath: string = 'assets/signin-image.jpg';
  loginForm: FormGroup;
  // username: string = '';
  // password: string = '';


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) {
      this.loginForm = this.formBuilder.group({
        email: new FormControl('',[Validators.required , Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }
    );
     }

  // login() {
  //   this.authService.login(this.username, this.password).subscribe(response => {
  //     console.log('Login successful:', response);
  //   }, error => {
  //     console.log('Login failed:', error);
  //   });
  // }



onSubmit() {
  const user = this.loginForm.value;

  // Ensure both email and password are of type string
  const email: string = user.email?.toString() ?? '';
  const password: string = user.password?.toString() ?? '';

  if (email && password) {
    this.authService.login(email, password).subscribe(response => {
      if (response.status === 200 && response.body.access_token) {
        const token = response.body.access_token;
        localStorage.setItem('token', token);  // Store token in local storage
        console.log(user);
        console.log(token);
        console.log('Login successful', 200);
        this.router.navigate(['/upload']);
      }
    }, error => {
      if (error.status === 401) {
        console.log('Login failed', 401);
      } else {
        console.log('An error occurred:', error);
      }
    });
  } else {
    console.log('Login failed: Email or password is missing.');
  }
}





}