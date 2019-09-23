import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntrepriseDetailsComponent } from './profil-entreprise-details.component';

describe('ProfilEntrepriseDetailsComponent', () => {
  let component: ProfilEntrepriseDetailsComponent;
  let fixture: ComponentFixture<ProfilEntrepriseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEntrepriseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntrepriseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
