import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePreviewDescriptionComponent } from './estate-preview-description.component';

describe('EstatePreviewDescriptionComponent', () => {
  let component: EstatePreviewDescriptionComponent;
  let fixture: ComponentFixture<EstatePreviewDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatePreviewDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatePreviewDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
