import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti1oComponent } from './infiniti1o.component';

describe('Infiniti1oComponent', () => {
  let component: Infiniti1oComponent;
  let fixture: ComponentFixture<Infiniti1oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti1oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti1oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
