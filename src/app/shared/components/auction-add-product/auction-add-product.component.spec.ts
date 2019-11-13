import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAddProductComponent } from './auction-add-product.component';

describe('AuctionAddProductComponent', () => {
  let component: AuctionAddProductComponent;
  let fixture: ComponentFixture<AuctionAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
