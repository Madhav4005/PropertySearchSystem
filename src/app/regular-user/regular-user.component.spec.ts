import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserComponent } from './regular-user.component';

describe('RegularUserComponent', () => {
  let component: RegularUserComponent;
  let fixture: ComponentFixture<RegularUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
