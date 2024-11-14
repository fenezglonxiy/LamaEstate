import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateNearbyFeatureComponent } from './estate-nearby-feature.component';

describe('EstateNearbyFeatureComponent', () => {
  let component: EstateNearbyFeatureComponent;
  let fixture: ComponentFixture<EstateNearbyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateNearbyFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateNearbyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
