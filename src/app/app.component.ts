import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  isValid: boolean;
  title = 'Auction';

    constructor() {
    this.name = 'Angular';
    this.isValid = false;
  }
}
