import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNnppComponent } from './reg-nnpp.component';

describe('RegNnppComponent', () => {
  let component: RegNnppComponent;
  let fixture: ComponentFixture<RegNnppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegNnppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegNnppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
