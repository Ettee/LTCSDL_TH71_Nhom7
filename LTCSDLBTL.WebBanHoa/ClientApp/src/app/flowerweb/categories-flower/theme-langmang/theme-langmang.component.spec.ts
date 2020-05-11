import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLangmangComponent } from './theme-langmang.component';

describe('ThemeLangmangComponent', () => {
  let component: ThemeLangmangComponent;
  let fixture: ComponentFixture<ThemeLangmangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLangmangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLangmangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
