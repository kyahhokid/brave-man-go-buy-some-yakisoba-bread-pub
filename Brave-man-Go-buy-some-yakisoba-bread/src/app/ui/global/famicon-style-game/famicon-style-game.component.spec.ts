import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleGameComponent } from './famicon-style-game.component';

describe('FamiconStyleGameComponent', () => {
  let component: FamiconStyleGameComponent;
  let fixture: ComponentFixture<FamiconStyleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamiconStyleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
