import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbCard } from './sb-card';

describe('SbCard', () => {
  let component: SbCard;
  let fixture: ComponentFixture<SbCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
