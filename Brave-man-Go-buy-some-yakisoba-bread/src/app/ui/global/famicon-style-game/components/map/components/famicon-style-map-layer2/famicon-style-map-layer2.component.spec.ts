import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleMapLayer2Component } from './famicon-style-map-layer2.component';

describe('Layer2Component', () => {
  let component: FamiconStyleMapLayer2Component;
  let fixture: ComponentFixture<FamiconStyleMapLayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleMapLayer2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FamiconStyleMapLayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
