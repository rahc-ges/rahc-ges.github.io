import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationGroupComponent } from './integration-group.component';

describe('IntegrationGroupComponent', () => {
  let component: IntegrationGroupComponent;
  let fixture: ComponentFixture<IntegrationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
