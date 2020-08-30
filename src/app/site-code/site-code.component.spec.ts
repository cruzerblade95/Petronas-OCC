import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCodeComponent } from './site-code.component';

describe('SiteCodeComponent', () => {
  let component: SiteCodeComponent;
  let fixture: ComponentFixture<SiteCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
