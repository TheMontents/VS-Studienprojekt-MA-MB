import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTobuyFormComponent } from './template-tobuy-form.component';

describe('TemplateTobuyFormComponent', () => {
  let component: TemplateTobuyFormComponent;
  let fixture: ComponentFixture<TemplateTobuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTobuyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTobuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
