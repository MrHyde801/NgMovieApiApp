import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsControllerComponent } from './details-controller.component';

describe('DetailsControllerComponent', () => {
  let component: DetailsControllerComponent;
  let fixture: ComponentFixture<DetailsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
