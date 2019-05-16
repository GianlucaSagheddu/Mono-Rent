import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooteringComponent } from './scootering.component';

describe('ScooteringComponent', () => {
  let component: ScooteringComponent;
  let fixture: ComponentFixture<ScooteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScooteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
