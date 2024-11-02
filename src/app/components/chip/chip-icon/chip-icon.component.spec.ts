import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipIconComponent } from './chip-icon.component';

describe('ChipIconComponent', () => {
  let component: ChipIconComponent;
  let fixture: ComponentFixture<ChipIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
