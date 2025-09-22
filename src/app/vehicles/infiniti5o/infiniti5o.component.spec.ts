import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti5oComponent } from './infiniti5o.component';

describe('Infiniti5oComponent', () => {
  let component: Infiniti5oComponent;
  let fixture: ComponentFixture<Infiniti5oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti5oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti5oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
