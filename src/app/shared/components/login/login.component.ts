import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../../routs-activators/usaved-changes-guard';
import {User} from '../../../model/user';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CanComponentDeactivate, OnInit {

  private user = new User('', '', '');

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private userService: AuthenticationService, private route: ActivatedRoute, private router: Router, ) {
  }


  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    this.userService.loginUser(this.user).pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.user.username.length > 0 || this.user.password.length > 0)) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
