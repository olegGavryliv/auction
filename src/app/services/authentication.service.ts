import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

  loginUser(user: User) {
    const body = {username: user.username, password: user.password};
    console.log(body);
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://localhost:8080/auction/users/login', body, {headers: myHeaders})
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify( new User(user.username, user.password,  data.token)));
        console.log(localStorage.getItem('currentUser'));
        this.currentUserSubject.next(new User(user.username, user.password,  data.token));
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
