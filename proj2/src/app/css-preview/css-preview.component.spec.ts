import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPreviewComponent } from './css-preview.component';

describe('CssPreviewComponent', () => {
  let component: CssPreviewComponent;
  let fixture: ComponentFixture<CssPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
