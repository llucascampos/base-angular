import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSaintgraaoComponent } from './layout-saintgraao.component';

describe('LayoutSaintgraaoComponent', () => {
  let component: LayoutSaintgraaoComponent;
  let fixture: ComponentFixture<LayoutSaintgraaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSaintgraaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSaintgraaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
