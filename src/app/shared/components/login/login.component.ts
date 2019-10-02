import {Component} from '@angular/core';
import {CanComponentDeactivate} from '../../../routsactivators/usaved-changes-guard';
import {User} from '../../../services/search-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CanComponentDeactivate {

 private user = new User('', '');

  onSubmit() {
    console.log(this.user.email, this.user.password);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.user.email.length > 0 || this.user.password.length > 0)) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
