import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptWindowComponent } from './prompt-window.component';

describe('PromptWindowComponent', () => {
  let component: PromptWindowComponent;
  let fixture: ComponentFixture<PromptWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
