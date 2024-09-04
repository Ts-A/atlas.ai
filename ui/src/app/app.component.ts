import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { PromptWindowComponent } from './prompt-window/prompt-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatGridListModule,
    MatDividerModule,
    FooterComponent,
    MapContainerComponent,
    PromptWindowComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
