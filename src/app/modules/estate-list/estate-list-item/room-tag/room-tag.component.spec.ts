import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTagComponent } from './room-tag.component';

describe('RoomTagComponent', () => {
  let component: RoomTagComponent;
  let fixture: ComponentFixture<RoomTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
