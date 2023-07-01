import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesExComponent } from './countries-ex.component';

describe('CountriesExComponent', () => {
  let component: CountriesExComponent;
  let fixture: ComponentFixture<CountriesExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesExComponent]
    });
    fixture = TestBed.createComponent(CountriesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
