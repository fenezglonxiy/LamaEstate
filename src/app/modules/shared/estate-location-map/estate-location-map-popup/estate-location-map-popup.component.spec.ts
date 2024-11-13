import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateLocationMapPopupComponent } from './estate-location-map-popup.component';

describe('EstateLocationMapPopupComponent', () => {
  let component: EstateLocationMapPopupComponent;
  let fixture: ComponentFixture<EstateLocationMapPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateLocationMapPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateLocationMapPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
