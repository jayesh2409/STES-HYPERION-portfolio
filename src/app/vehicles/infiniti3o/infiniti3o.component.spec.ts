import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti3oComponent } from './infiniti3o.component';

describe('Infiniti3oComponent', () => {
  let component: Infiniti3oComponent;
  let fixture: ComponentFixture<Infiniti3oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti3oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti3oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
