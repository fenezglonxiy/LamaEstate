import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnchorComponent } from './popover-anchor.component';

describe('PopoverAnchorComponent', () => {
  let component: PopoverAnchorComponent;
  let fixture: ComponentFixture<PopoverAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverAnchorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
