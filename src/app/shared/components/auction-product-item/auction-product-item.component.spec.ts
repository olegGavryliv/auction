import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionProductItemComponent } from './auction-product-item.component';

describe('AuctionProductItemComponent', () => {
  let component: AuctionProductItemComponent;
  let fixture: ComponentFixture<AuctionProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
