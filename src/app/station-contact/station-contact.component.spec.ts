import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationContactComponent } from './station-contact.component';

describe('StationContactComponent', () => {
  let component: StationContactComponent;
  let fixture: ComponentFixture<StationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
