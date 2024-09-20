import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateListItemComponent } from './estate-list-item.component';

describe('EstateListItemComponent', () => {
  let component: EstateListItemComponent;
  let fixture: ComponentFixture<EstateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
