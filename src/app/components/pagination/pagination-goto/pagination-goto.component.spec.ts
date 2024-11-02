import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationGotoComponent } from './pagination-goto.component';

describe('PaginationGotoComponent', () => {
  let component: PaginationGotoComponent;
  let fixture: ComponentFixture<PaginationGotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationGotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationGotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
