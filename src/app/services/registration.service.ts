import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }


  registerUser(name: string, mail: string, pass: string) {
    const body = {username: name, password: pass, email : mail};

    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:8080/auction/users/register', body, {headers: myHeaders})
      .pipe(map(data => {
          // store reviewer details and jwt token in local storage to keep reviewer logged in between page refreshes
          const loginedUser = new User(name, pass, JSON.stringify(data));
          this.authService.registerUser(loginedUser);
          localStorage.setItem('currentUser', JSON.stringify(loginedUser));
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }


}
