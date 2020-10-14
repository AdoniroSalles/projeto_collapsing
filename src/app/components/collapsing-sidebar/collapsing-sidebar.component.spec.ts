import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsingSidebarComponent } from './collapsing-sidebar.component';

describe('CollapsingSidebarComponent', () => {
  let component: CollapsingSidebarComponent;
  let fixture: ComponentFixture<CollapsingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
