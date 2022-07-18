import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngenhariaComponent } from './engenharia.component';

describe('EngenhariaComponent', () => {
  let component: EngenhariaComponent;
  let fixture: ComponentFixture<EngenhariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngenhariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngenhariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
