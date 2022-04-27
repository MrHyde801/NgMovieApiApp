import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  })

  faGoogle = faGoogle;


  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    ) { 

  }

  ngOnInit(): void {
  }

  reset(): void {
    this.loginForm.controls['email'].setValue('');
  }

  createUser() {
    const email = this.loginForm.controls['email'].value
    const password = this.loginForm.controls['password'].value
   
    console.log(email)
    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
  });
  }

}
