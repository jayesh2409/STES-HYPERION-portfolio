import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infiniti6oComponent } from './infiniti6o.component';

describe('Infiniti6oComponent', () => {
  let component: Infiniti6oComponent;
  let fixture: ComponentFixture<Infiniti6oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infiniti6oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infiniti6oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
