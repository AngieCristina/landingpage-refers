import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReferralsFormComponent } from './my-referrals-form.component';

describe('MyReferralsFormComponent', () => {
  let component: MyReferralsFormComponent;
  let fixture: ComponentFixture<MyReferralsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReferralsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReferralsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
