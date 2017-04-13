/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapGLComponent } from './map-gl.component';

describe('MapGLComponent', () => {
  let component: MapGLComponent;
  let fixture: ComponentFixture<MapGLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
