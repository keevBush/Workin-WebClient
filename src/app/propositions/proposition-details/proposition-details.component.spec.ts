import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionDetailsComponent } from './proposition-details.component';

describe('PropositionDetailsComponent', () => {
  let component: PropositionDetailsComponent;
  let fixture: ComponentFixture<PropositionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
