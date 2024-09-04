import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [NgxPlaceholderComponent],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapContainerComponent {}
