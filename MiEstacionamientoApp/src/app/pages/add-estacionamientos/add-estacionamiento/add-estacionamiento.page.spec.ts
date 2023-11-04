import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEstacionamientoPage } from './add-estacionamiento.page';

describe('AddEstacionamientoPage', () => {
  let component: AddEstacionamientoPage;
  let fixture: ComponentFixture<AddEstacionamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEstacionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
