import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateSearchComponent } from './estate-search.component';

describe('EstateSearchComponent', () => {
  let component: EstateSearchComponent;
  let fixture: ComponentFixture<EstateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
