import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auction-navbar',
  templateUrl: './auction-navbar.component.html',
  styleUrls: ['./auction-navbar.component.css']
})
export class AuctionNavbarComponent implements OnInit {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser
      .subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
