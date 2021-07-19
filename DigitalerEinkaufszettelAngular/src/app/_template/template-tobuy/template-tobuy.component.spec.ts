import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTobuyComponent } from './template-tobuy.component';

describe('TemplateTobuyComponent', () => {
  let component: TemplateTobuyComponent;
  let fixture: ComponentFixture<TemplateTobuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTobuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
