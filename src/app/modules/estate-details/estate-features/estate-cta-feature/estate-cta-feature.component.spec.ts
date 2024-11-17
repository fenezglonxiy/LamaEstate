import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateCtaFeatureComponent } from './estate-cta-feature.component';

describe('EstateCtaFeatureComponent', () => {
  let component: EstateCtaFeatureComponent;
  let fixture: ComponentFixture<EstateCtaFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateCtaFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateCtaFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
