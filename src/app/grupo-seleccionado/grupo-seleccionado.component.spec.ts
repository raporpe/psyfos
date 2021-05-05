import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSeleccionadoComponent } from './grupo-seleccionado.component';

describe('GrupoSeleccionadoComponent', () => {
  let component: GrupoSeleccionadoComponent;
  let fixture: ComponentFixture<GrupoSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
