import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursingHomePage } from './nursing-home.page';

describe('NursingHomePage', () => {
  let component: NursingHomePage;
  let fixture: ComponentFixture<NursingHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursingHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
