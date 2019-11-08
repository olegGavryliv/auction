import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAlterComponentComponent } from './auction-alter-component.component';

describe('AuctionAlterComponentComponent', () => {
  let component: AuctionAlterComponentComponent;
  let fixture: ComponentFixture<AuctionAlterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionAlterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAlterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
