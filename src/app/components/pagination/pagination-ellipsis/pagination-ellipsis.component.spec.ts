import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationEllipsisComponent } from './pagination-ellipsis.component';

describe('PaginationEllipsisComponent', () => {
  let component: PaginationEllipsisComponent;
  let fixture: ComponentFixture<PaginationEllipsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationEllipsisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
