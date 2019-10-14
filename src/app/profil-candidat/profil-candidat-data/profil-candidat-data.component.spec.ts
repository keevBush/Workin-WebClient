import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidatDataComponent } from './profil-candidat-data.component';

describe('ProfilCandidatDataComponent', () => {
  let component: ProfilCandidatDataComponent;
  let fixture: ComponentFixture<ProfilCandidatDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCandidatDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCandidatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
