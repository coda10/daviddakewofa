import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnlineComponent } from './view-online.component';

describe('ViewOnlineComponent', () => {
  let component: ViewOnlineComponent;
  let fixture: ComponentFixture<ViewOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
