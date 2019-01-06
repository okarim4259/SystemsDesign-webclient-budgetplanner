import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild(LoginFormComponent) loginForm;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}
}
