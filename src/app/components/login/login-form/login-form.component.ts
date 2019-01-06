import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  _email: string;
  _password: string;
  _displayError: Boolean = false;
  _errorMessage: any;
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {}

  async onLoginSubmit() {
    this._authService.loginUser(this._email, this._password).subscribe(
      (data: any) => {
        if (data.success) {
          console.log(data);
          this._router.navigate(['/dash']);
        }
      },
      err => {
        console.log(err);
        this._displayError = true;
        this._errorMessage = err.error.message;
        console.log(this._errorMessage);
      }
    );
  }
}
