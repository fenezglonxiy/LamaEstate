import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateAddressComponent } from './estate-address.component';

describe('EstateAddressComponent', () => {
  let component: EstateAddressComponent;
  let fixture: ComponentFixture<EstateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
