import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPreviousComponent } from './pagination-previous.component';

describe('PaginationPreviousComponent', () => {
  let component: PaginationPreviousComponent;
  let fixture: ComponentFixture<PaginationPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationPreviousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
