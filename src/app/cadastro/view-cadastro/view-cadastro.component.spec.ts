import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCadastroComponent } from './view-cadastro.component';

describe('ViewCadastroComponent', () => {
  let component: ViewCadastroComponent;
  let fixture: ComponentFixture<ViewCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
