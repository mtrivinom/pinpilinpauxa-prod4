import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazReproductorComponent } from './interfaz-reproductor.component';

describe('InterfazReproductorComponent', () => {
  let component: InterfazReproductorComponent;
  let fixture: ComponentFixture<InterfazReproductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazReproductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfazReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
