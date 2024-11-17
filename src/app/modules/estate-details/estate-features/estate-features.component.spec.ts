import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateFeaturesComponent } from './estate-features.component';

describe('EstateFeaturesComponent', () => {
  let component: EstateFeaturesComponent;
  let fixture: ComponentFixture<EstateFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
