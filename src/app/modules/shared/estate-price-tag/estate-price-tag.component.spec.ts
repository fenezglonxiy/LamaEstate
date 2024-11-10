import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePriceTagComponent } from './estate-price-tag.component';

describe('EstatePriceTagComponent', () => {
  let component: EstatePriceTagComponent;
  let fixture: ComponentFixture<EstatePriceTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatePriceTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatePriceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
