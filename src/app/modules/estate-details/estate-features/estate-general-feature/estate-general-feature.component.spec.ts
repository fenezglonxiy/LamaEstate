import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateGeneralFeatureComponent } from './estate-general-feature.component';

describe('EstateGeneralFeatureComponent', () => {
  let component: EstateGeneralFeatureComponent;
  let fixture: ComponentFixture<EstateGeneralFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateGeneralFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateGeneralFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
