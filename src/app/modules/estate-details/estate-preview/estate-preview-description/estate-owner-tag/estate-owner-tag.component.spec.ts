import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateOwnerTagComponent } from './estate-owner-tag.component';

describe('EstateOwnerTagComponent', () => {
  let component: EstateOwnerTagComponent;
  let fixture: ComponentFixture<EstateOwnerTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateOwnerTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateOwnerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
