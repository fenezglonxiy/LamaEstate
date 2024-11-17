import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateLocationFeatureComponent } from './estate-location-feature.component';

describe('EstateLocationFeatureComponent', () => {
  let component: EstateLocationFeatureComponent;
  let fixture: ComponentFixture<EstateLocationFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateLocationFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateLocationFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
