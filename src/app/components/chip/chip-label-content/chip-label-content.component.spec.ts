import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipLabelContentComponent } from './chip-label-content.component';

describe('ChipLabelContentComponent', () => {
  let component: ChipLabelContentComponent;
  let fixture: ComponentFixture<ChipLabelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipLabelContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipLabelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
