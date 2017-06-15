import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFrameComponent } from './category-frame.component';

describe('CategoryFrameComponent', () => {
  let component: CategoryFrameComponent;
  let fixture: ComponentFixture<CategoryFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
