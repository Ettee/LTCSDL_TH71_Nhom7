import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSinhnhatComponent } from './theme-sinhnhat.component';

describe('ThemeSinhnhatComponent', () => {
  let component: ThemeSinhnhatComponent;
  let fixture: ComponentFixture<ThemeSinhnhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSinhnhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSinhnhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
