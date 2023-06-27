import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteFormsComponent } from './templete-forms.component';

describe('TempleteFormsComponent', () => {
  let component: TempleteFormsComponent;
  let fixture: ComponentFixture<TempleteFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleteFormsComponent]
    });
    fixture = TestBed.createComponent(TempleteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
