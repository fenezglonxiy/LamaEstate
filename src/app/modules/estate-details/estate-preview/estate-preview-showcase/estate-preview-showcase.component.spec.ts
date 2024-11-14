import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePreviewShowcaseComponent } from './estate-preview-showcase.component';

describe('EstatePreviewShowcaseComponent', () => {
  let component: EstatePreviewShowcaseComponent;
  let fixture: ComponentFixture<EstatePreviewShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatePreviewShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatePreviewShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
