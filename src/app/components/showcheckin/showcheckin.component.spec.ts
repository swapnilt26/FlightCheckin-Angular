import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcheckinComponent } from './showcheckin.component';

describe('ShowcheckinComponent', () => {
  let component: ShowcheckinComponent;
  let fixture: ComponentFixture<ShowcheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
