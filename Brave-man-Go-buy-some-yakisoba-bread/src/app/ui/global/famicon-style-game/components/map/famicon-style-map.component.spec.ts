import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleMapComponent } from './famicon-style-map.component';

describe('FamicomStyleMapComponent', () => {
  let component: FamiconStyleMapComponent;
  let fixture: ComponentFixture<FamiconStyleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleMapComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FamiconStyleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
