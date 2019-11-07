import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  loginUser(user: User) {
    const body = {username: user.username, password: user.password};
    console.log(body);
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:8080/auction/users/login', body, {headers: myHeaders});
  }
}
