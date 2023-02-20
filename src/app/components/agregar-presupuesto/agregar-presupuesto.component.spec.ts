import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPresupuestoComponent } from './agregar-presupuesto.component';

describe('AgregarPresupuestoComponent', () => {
  let component: AgregarPresupuestoComponent;
  let fixture: ComponentFixture<AgregarPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPresupuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
