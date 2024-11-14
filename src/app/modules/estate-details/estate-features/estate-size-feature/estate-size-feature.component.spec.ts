import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateSizeFeatureComponent } from './estate-size-feature.component';

describe('EstateSizeFeatureComponent', () => {
  let component: EstateSizeFeatureComponent;
  let fixture: ComponentFixture<EstateSizeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateSizeFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateSizeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
