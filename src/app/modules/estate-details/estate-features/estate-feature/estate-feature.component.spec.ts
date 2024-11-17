import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateFeatureComponent } from './estate-feature.component';

describe('EstateFeatureComponent', () => {
  let component: EstateFeatureComponent;
  let fixture: ComponentFixture<EstateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
