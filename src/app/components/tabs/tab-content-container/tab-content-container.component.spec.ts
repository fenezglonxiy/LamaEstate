import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentContainerComponent } from './tab-content-container.component';

describe('TabContentContainerComponent', () => {
  let component: TabContentContainerComponent;
  let fixture: ComponentFixture<TabContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
