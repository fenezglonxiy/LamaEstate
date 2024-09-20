import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateLocationMapComponent } from './estate-location-map.component';

describe('EstateLocationMapComponent', () => {
  let component: EstateLocationMapComponent;
  let fixture: ComponentFixture<EstateLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstateLocationMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstateLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
