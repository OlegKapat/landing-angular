import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfounderComponent } from './aboutfounder.component';

describe('AboutfounderComponent', () => {
  let component: AboutfounderComponent;
  let fixture: ComponentFixture<AboutfounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutfounderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
