import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleGameControllerComponent } from './famicon-style-game-controller.component';

describe('FamiconStyleGameControllerComponent', () => {
  let component: FamiconStyleGameControllerComponent;
  let fixture: ComponentFixture<FamiconStyleGameControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleGameControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamiconStyleGameControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
