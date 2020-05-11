import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBohoaComponent } from './theme-bohoa.component';

describe('ThemeBohoaComponent', () => {
  let component: ThemeBohoaComponent;
  let fixture: ComponentFixture<ThemeBohoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeBohoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeBohoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
