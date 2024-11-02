import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipIconContentComponent } from './chip-icon-content.component';

describe('ChipIconContentComponent', () => {
  let component: ChipIconContentComponent;
  let fixture: ComponentFixture<ChipIconContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipIconContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipIconContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
