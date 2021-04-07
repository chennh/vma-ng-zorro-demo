import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMenuListTreeComponent } from './resource-menu-list-tree.component';

describe('ResourceMenuListTreeComponent', () => {
  let component: ResourceMenuListTreeComponent;
  let fixture: ComponentFixture<ResourceMenuListTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceMenuListTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMenuListTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
