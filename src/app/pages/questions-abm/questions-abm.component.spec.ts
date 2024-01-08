import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsABMComponent } from './questions-abm.component';

describe('QuestionsABMComponent', () => {
  let component: QuestionsABMComponent;
  let fixture: ComponentFixture<QuestionsABMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsABMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
