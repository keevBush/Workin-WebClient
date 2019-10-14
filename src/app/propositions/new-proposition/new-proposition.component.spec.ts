import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropositionComponent } from './new-proposition.component';

describe('NewPropositionComponent', () => {
  let component: NewPropositionComponent;
  let fixture: ComponentFixture<NewPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
