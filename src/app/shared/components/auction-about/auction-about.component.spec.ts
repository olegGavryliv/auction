import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAboutComponent } from './auction-about.component';

describe('AuctionAboutComponent', () => {
  let component: AuctionAboutComponent;
  let fixture: ComponentFixture<AuctionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
