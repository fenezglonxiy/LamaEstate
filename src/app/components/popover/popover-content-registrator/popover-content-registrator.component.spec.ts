import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverContentRegistratorComponent } from './popover-content-registrator.component';

describe('PopoverContentRegistratorComponent', () => {
  let component: PopoverContentRegistratorComponent;
  let fixture: ComponentFixture<PopoverContentRegistratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverContentRegistratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverContentRegistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
