import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbingComponent } from './getbing.component';

describe('GetbingComponent', () => {
  let component: GetbingComponent;
  let fixture: ComponentFixture<GetbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
