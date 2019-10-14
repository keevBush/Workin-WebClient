import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidatDetailsComponent } from './profil-candidat-details.component';

describe('ProfilCandidatDetailsComponent', () => {
  let component: ProfilCandidatDetailsComponent;
  let fixture: ComponentFixture<ProfilCandidatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCandidatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCandidatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
