import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFlowerComponent } from './detail-flower.component';

describe('DetailFlowerComponent', () => {
  let component: DetailFlowerComponent;
  let fixture: ComponentFixture<DetailFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
