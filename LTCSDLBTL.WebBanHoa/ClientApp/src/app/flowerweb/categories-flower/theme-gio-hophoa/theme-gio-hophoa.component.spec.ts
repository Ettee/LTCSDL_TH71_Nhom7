import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeGioHophoaComponent } from './theme-gio-hophoa.component';

describe('ThemeGioHophoaComponent', () => {
  let component: ThemeGioHophoaComponent;
  let fixture: ComponentFixture<ThemeGioHophoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeGioHophoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeGioHophoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
