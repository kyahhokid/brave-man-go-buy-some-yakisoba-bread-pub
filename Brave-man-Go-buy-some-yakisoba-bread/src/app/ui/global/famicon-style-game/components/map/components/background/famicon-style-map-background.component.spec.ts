import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleMapBackgroundComponent } from './famicon-style-map-background.component';

describe('FamiconStyleMapBackgroundComponent', () => {
  let component: FamiconStyleMapBackgroundComponent;
  let fixture: ComponentFixture<FamiconStyleMapBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleMapBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamiconStyleMapBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
