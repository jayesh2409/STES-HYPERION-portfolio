import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti2oComponent } from './infiniti2o.component';

describe('Infiniti2oComponent', () => {
  let component: Infiniti2oComponent;
  let fixture: ComponentFixture<Infiniti2oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti2oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti2oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
