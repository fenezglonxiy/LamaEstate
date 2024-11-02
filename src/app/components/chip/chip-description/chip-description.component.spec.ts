import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDescriptionComponent } from './chip-description.component';

describe('ChipDescriptionComponent', () => {
  let component: ChipDescriptionComponent;
  let fixture: ComponentFixture<ChipDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
