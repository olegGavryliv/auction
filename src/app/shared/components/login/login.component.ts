import {Component} from '@angular/core';
import {CanComponentDeactivate} from '../../../routs-activators/usaved-changes-guard';
import {User} from '../../../model/user';
import {Observable} from 'rxjs';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CanComponentDeactivate {

  private user = new User('', '');

  token: string = null;

  done = false;

  constructor(private userService: UserService) {
  }

  onSubmit() {
    this.userService.loginUser(this.user).subscribe(
      (data: string) => {
        this.token = data;
        this.done = true;
      },
      error => console.log(error)
    );
    console.log(this.token);
    if (this.token != null) {
      localStorage.setItem('id_token', this.token);
    }

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.user.username.length > 0 || this.user.password.length > 0)) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
