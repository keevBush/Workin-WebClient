import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntrepriseComponent } from './new-entreprise.component';

describe('NewEntrepriseComponent', () => {
  let component: NewEntrepriseComponent;
  let fixture: ComponentFixture<NewEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
