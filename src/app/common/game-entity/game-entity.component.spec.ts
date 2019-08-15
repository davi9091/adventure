import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEntityComponent } from './game-entity.component';

describe('GameEntityComponent', () => {
  let component: GameEntityComponent;
  let fixture: ComponentFixture<GameEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
