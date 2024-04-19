import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiconStyleGameCharacterComponent } from './famicon-style-game-character.component';

describe('FamiconStyleGameCharacterComponent', () => {
  let component: FamiconStyleGameCharacterComponent;
  let fixture: ComponentFixture<FamiconStyleGameCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiconStyleGameCharacterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FamiconStyleGameCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
