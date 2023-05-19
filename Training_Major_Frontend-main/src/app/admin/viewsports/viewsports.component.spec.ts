import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsportsComponent } from './viewsports.component';

describe('ViewsportsComponent', () => {
  let component: ViewsportsComponent;
  let fixture: ComponentFixture<ViewsportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsportsComponent ]
    })
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
