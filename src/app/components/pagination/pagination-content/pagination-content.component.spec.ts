import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationContentComponent } from './pagination-content.component';

describe('PaginationContentComponent', () => {
  let component: PaginationContentComponent;
  let fixture: ComponentFixture<PaginationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
