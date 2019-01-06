import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private access_token: string;
  private baseUrl = environment.authserver_dev_baseurl;

  constructor(private http: HttpClient) {
    this.access_token = '';
  }

  public loginUser(_email: string, _password: string): Observable<any> {
    const loginRequest = {
      email: _email,
      password: _password
    };

    return this.http.post(`${this.baseUrl}/auth/login`, loginRequest);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }
}
