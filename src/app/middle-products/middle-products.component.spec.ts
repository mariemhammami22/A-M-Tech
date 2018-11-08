import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleProductsComponent } from './middle-products.component';

describe('MiddleProductsComponent', () => {
  let component: MiddleProductsComponent;
  let fixture: ComponentFixture<MiddleProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
