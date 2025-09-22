import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnantamComponent } from './anantam.component';

describe('AnantamComponent', () => {
  let component: AnantamComponent;
  let fixture: ComponentFixture<AnantamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnantamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnantamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
