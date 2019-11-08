import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../services/alert-service';

@Component({
  selector: 'app-auction-alter-component',
  templateUrl: './auction-alter-component.component.html',
  styleUrls: ['./auction-alter-component.component.css']
})
export class AuctionAlterComponentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
