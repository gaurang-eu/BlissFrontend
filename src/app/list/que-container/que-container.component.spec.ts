import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueContainerComponent } from './que-container.component';

describe('QueContainerComponent', () => {
  let component: QueContainerComponent;
  let fixture: ComponentFixture<QueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
