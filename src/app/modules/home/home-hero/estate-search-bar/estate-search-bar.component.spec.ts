import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateSearchBarComponent } from './estate-search-bar.component';

describe('EstateSearchBarComponent', () => {
  let component: EstateSearchBarComponent;
  let fixture: ComponentFixture<EstateSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
