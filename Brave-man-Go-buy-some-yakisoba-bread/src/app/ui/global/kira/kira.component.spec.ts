import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiraComponent } from './kira.component';

describe('KiraComponent', () => {
  let component: KiraComponent;
  let fixture: ComponentFixture<KiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KiraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
