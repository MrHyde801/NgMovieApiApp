import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = this.fb.group({
    email: [''],
    password: [''],
  })

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,) { }

  ngOnInit(): void {
  }

}
