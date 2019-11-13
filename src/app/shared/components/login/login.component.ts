import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../../routs-activators/usaved-changes-guard';
import {User} from '../../../model/user';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../services/alert-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CanComponentDeactivate, OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: any;
  errors: string[];

  private details: string[];

  constructor(private userService: AuthenticationService, private route: ActivatedRoute,
              private router: Router, private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder, private alertService: AlertService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['Tom', Validators.required],
        password: ['password', Validators.required]
      });
    this.errors = [];


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.errors = [];
    this.submitted = true;
    this.userService.loginUser(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Login successful', true);
          this.router.navigate([this.returnUrl]);
          },
            error => {
              this.alertService.error(error.error.message, true);
              if (error.status === 400) {
                        error.error.details.forEach(obj => {
                          this.errors.push(obj.messages);
                        });
                       }
            });
}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.f.username.value.length > 0 || this.f.password.value.length > 0)) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
