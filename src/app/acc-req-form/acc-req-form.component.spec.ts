import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccReqFormComponent } from './acc-req-form.component';

describe('AccReqFormComponent', () => {
  let component: AccReqFormComponent;
  let fixture: ComponentFixture<AccReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccReqFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
