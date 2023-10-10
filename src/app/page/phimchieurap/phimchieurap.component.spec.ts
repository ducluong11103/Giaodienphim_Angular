import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimchieurapComponent } from './phimchieurap.component';

describe('PhimchieurapComponent', () => {
  let component: PhimchieurapComponent;
  let fixture: ComponentFixture<PhimchieurapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhimchieurapComponent]
    });
    fixture = TestBed.createComponent(PhimchieurapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
