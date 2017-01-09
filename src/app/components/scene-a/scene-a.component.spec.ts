/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SceneAComponent } from './scene-a.component';

describe('SceneAComponent', () => {
  let component: SceneAComponent;
  let fixture: ComponentFixture<SceneAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
