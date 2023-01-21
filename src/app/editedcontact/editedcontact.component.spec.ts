import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedcontactComponent } from './editedcontact.component';

describe('EditedcontactComponent', () => {
  let component: EditedcontactComponent;
  let fixture: ComponentFixture<EditedcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
