import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


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


  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
  }

}
