import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContentRegistratorComponent } from './select-content-registrator.component';

describe('SelectContentRegistratorComponent', () => {
  let component: SelectContentRegistratorComponent;
  let fixture: ComponentFixture<SelectContentRegistratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectContentRegistratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectContentRegistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
