import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOfConversationComponent } from './content-of-conversation.component';

describe('ContentOfConversationComponent', () => {
  let component: ContentOfConversationComponent;
  let fixture: ComponentFixture<ContentOfConversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentOfConversationComponent]
    });
    fixture = TestBed.createComponent(ContentOfConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
