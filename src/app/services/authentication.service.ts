import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginUser(name: string, pass: string): Observable<User> {
    const body = {username: name, password: pass};
    console.log(body);
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<User>('http://localhost:8080/auction/users/login', body, {headers: myHeaders})
      .pipe(map(data => {
          // store reviewer details and jwt token in local storage to keep reviewer logged in between page refreshes
       const loginedUser = new User(name, pass, data.token);
       localStorage.setItem('currentUser', JSON.stringify(loginedUser));
       this.currentUserSubject.next(loginedUser);
       return loginedUser;
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }));
  }

  registerUser(user: User) {
    this.currentUserSubject.next(user);
  }


  logout() {
    // remove reviewer from local storage to log reviewer out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
