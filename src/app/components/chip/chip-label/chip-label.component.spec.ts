import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipLabelComponent } from './chip-label.component';

describe('ChipLabelComponent', () => {
  let component: ChipLabelComponent;
  let fixture: ComponentFixture<ChipLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
