import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti7oComponent } from './infiniti7o.component';

describe('Infiniti7oComponent', () => {
  let component: Infiniti7oComponent;
  let fixture: ComponentFixture<Infiniti7oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti7oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti7oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
