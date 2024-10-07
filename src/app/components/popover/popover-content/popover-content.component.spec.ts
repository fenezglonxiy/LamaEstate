import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentComponent } from './popover-content.component';

describe('PopoverContentComponent', () => {
  let component: PopoverContentComponent;
  let fixture: ComponentFixture<PopoverContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
