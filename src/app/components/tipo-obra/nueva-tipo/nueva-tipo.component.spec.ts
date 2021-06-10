import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTipoComponent } from './nueva-tipo.component';

describe('NuevaTipoComponent', () => {
  let component: NuevaTipoComponent;
  let fixture: ComponentFixture<NuevaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
