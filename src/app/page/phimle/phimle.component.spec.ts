import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimleComponent } from './phimle.component';

describe('PhimleComponent', () => {
  let component: PhimleComponent;
  let fixture: ComponentFixture<PhimleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhimleComponent]
    });
    fixture = TestBed.createComponent(PhimleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
