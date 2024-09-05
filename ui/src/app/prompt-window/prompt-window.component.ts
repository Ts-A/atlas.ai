import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-prompt-window',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatIconModule, WindowComponent],
  templateUrl: './prompt-window.component.html',
  styleUrl: './prompt-window.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PromptWindowComponent {}
