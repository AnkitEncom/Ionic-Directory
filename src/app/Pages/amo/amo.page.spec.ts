import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoPage } from './amo.page';

describe('AmoPage', () => {
  let component: AmoPage;
  let fixture: ComponentFixture<AmoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
