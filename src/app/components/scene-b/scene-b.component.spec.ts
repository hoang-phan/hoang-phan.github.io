/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SceneBComponent } from './scene-b.component';

describe('SceneBComponent', () => {
  let component: SceneBComponent;
  let fixture: ComponentFixture<SceneBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
