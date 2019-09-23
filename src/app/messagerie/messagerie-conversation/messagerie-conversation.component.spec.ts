import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieConversationComponent } from './messagerie-conversation.component';

describe('MessagerieConversationComponent', () => {
  let component: MessagerieConversationComponent;
  let fixture: ComponentFixture<MessagerieConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
