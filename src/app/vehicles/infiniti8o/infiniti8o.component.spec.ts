import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti8oComponent } from './infiniti8o.component';

describe('Infiniti8oComponent', () => {
  let component: Infiniti8oComponent;
  let fixture: ComponentFixture<Infiniti8oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti8oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti8oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
