import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilDetailsFiltersComponent } from './acceuil-details-filters.component';

describe('AcceuilDetailsFiltersComponent', () => {
  let component: AcceuilDetailsFiltersComponent;
  let fixture: ComponentFixture<AcceuilDetailsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilDetailsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilDetailsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
