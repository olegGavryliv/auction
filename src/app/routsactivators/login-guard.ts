import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate() {
    return this.checkIfLoggedIn();
  }

private checkIfLoggedIn(): boolean {

    const loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('user is not logged in');
    }
    return loggedIn;
  }

}
