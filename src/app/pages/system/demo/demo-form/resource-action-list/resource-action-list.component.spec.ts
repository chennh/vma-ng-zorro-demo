import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceActionListComponent } from './resource-action-list.component';

describe('ResourceActionListComponent', () => {
  let component: ResourceActionListComponent;
  let fixture: ComponentFixture<ResourceActionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceActionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
