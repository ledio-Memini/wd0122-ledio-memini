import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonactivePostComponent } from './nonactive-post.component';

describe('NonactivePostComponent', () => {
  let component: NonactivePostComponent;
  let fixture: ComponentFixture<NonactivePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonactivePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonactivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
