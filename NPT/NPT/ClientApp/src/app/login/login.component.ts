import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { loginrequestmodel } from '../models/loginmodel';
import { GlobalFunctions } from '../Global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public _loginrequestmodel: loginrequestmodel;

  ngOnInit(): void {
    this._loginrequestmodel =
    {
      username: '',
      password: ''
    }

  }
  login() {
    if (!GlobalFunctions.IsNullorEmpty(this._loginrequestmodel.username)) {
      if (!GlobalFunctions.IsNullorEmpty(this._loginrequestmodel.password)) {
        //API CALL
        this.router.navigate(['/home'])

      }
      else {
        alert('Please enter a Employee Id or Password.')
      }
    }
    else {
      alert('Please enter a Employee Id or Password.')
    }
  }
}
