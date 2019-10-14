import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntrepriseEditComponent } from './profil-entreprise-edit.component';

describe('ProfilEntrepriseEditComponent', () => {
  let component: ProfilEntrepriseEditComponent;
  let fixture: ComponentFixture<ProfilEntrepriseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEntrepriseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntrepriseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
