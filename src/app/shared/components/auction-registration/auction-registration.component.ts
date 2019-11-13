import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistrationService} from '../../../services/registration.service';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert-service';

@Component({
  selector: 'app-auction-registration',
  templateUrl: './auction-registration.component.html',
  styleUrls: ['./auction-registration.component.css']
})
export class AuctionRegistrationComponent implements OnInit {

  registerForm: FormGroup;

  error: any;
  errors: string[];

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private registerService: RegistrationService, private alertService: AlertService ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['pastor2', Validators.required],
      email: ['kurm6886@gmail.com', Validators.required],
      password: ['password23', Validators.required]
    });
    this.errors = [];
  }

  get f() {
   return this.registerForm.controls;
  }


  onSubmit() {

    this.errors = [];

    this.registerService.registerUser(this.f.username.value, this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['']);
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

}
