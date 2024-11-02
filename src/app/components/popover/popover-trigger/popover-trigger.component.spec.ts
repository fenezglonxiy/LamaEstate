import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTriggerComponent } from './popover-trigger.component';

describe('PopoverTriggerComponent', () => {
  let component: PopoverTriggerComponent;
  let fixture: ComponentFixture<PopoverTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
