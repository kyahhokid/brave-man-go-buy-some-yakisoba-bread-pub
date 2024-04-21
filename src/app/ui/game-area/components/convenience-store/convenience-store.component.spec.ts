import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenienceStoreComponent } from './convenience-store.component';

describe('ConvenienceStoreComponent', () => {
  let component: ConvenienceStoreComponent;
  let fixture: ComponentFixture<ConvenienceStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvenienceStoreComponent]
    });
    fixture = TestBed.createComponent(ConvenienceStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
