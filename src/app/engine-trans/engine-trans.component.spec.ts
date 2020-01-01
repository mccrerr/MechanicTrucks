import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineTransComponent } from './engine-trans.component';

describe('EngineTransComponent', () => {
  let component: EngineTransComponent;
  let fixture: ComponentFixture<EngineTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
