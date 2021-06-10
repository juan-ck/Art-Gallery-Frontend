import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoComponent } from './lista-tipo.component';

describe('ListaTipoComponent', () => {
  let component: ListaTipoComponent;
  let fixture: ComponentFixture<ListaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
