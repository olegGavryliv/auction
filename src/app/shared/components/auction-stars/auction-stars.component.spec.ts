import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionStarsComponent } from './auction-stars.component';

describe('AuctionStarsComponent', () => {
  let component: AuctionStarsComponent;
  let fixture: ComponentFixture<AuctionStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
