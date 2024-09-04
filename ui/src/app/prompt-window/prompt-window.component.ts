import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-prompt-window',
  standalone: true,
  imports: [NgxPlaceholderComponent],
  templateUrl: './prompt-window.component.html',
  styleUrl: './prompt-window.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PromptWindowComponent {}
