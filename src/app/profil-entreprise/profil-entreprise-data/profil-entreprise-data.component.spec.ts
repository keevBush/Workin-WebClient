import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntrepriseDataComponent } from './profil-entreprise-data.component';

describe('ProfilEntrepriseDataComponent', () => {
  let component: ProfilEntrepriseDataComponent;
  let fixture: ComponentFixture<ProfilEntrepriseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEntrepriseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntrepriseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
