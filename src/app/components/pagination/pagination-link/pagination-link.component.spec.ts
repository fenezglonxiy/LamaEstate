import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLinkComponent } from './pagination-link.component';

describe('PaginationLinkComponent', () => {
  let component: PaginationLinkComponent;
  let fixture: ComponentFixture<PaginationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
