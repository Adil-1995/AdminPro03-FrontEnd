import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesComponent } from './hospitales.component';

describe('HospitalesComponent', () => {
  let component: HospitalesComponent;
  let fixture: ComponentFixture<HospitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
