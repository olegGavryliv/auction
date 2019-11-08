import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionRegistrationComponent } from './auction-registration.component';

describe('AuctionRegistrationComponent', () => {
  let component: AuctionRegistrationComponent;
  let fixture: ComponentFixture<AuctionRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
