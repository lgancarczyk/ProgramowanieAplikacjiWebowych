import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatingPreviewComponent } from './formating-preview.component';

describe('FormatingPreviewComponent', () => {
  let component: FormatingPreviewComponent;
  let fixture: ComponentFixture<FormatingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatingPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
